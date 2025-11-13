import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import { createLowlight } from "lowlight";
import js from "highlight.js/lib/languages/javascript";
import React, { useEffect, useRef, useState } from "react";

const low = createLowlight({
  js,
});

type ImageWithAlt = {
  file: File;
  alt: string;
  cover? : boolean;
  src : string;
};
function BlogPost() {
  const [images, setImages] = useState<ImageWithAlt[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const coverInputRef = useRef<HTMLInputElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const fieldRef = useRef<HTMLSelectElement>(null);


  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        codeBlock: false,
      }),
      Image,
      CodeBlockLowlight.configure({
        lowlight: low,
      }),
    ],
    content: "",
  });

  console.log(editor.getHTML())
  

  useEffect(()=>{

  if(!editor){return};

  editor.chain().focus();

  const handleUpdate = ()=>{
    setImages((prev)=>{
      
    return prev.filter(({src})=>{
      return editor.getHTML().includes(src)
    })
  })
 }

   editor.on('update', handleUpdate);

   return ()=>{
    editor.off('update', handleUpdate);
   }

  }, [editor]);

  function handleFiles(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) {
      return;
    }

    const selectedFiles = Array.from(e.target.files);

    const filesWithAlt = selectedFiles.map((file) => {
      return {
        file,
        alt: "123",
        src : URL.createObjectURL(file),
      };
    });

    setImages((prev) => {
      return [...prev, ...filesWithAlt];
    });

    filesWithAlt.forEach(({ alt, src }) => {
      editor?.chain().focus().setImage({ src, alt }).run();
    });
  }

  function handleFile(e : React.ChangeEvent<HTMLInputElement>){
    if(!e.target.files){
      return;
    }

    const coverOnlyOne = images.some(({cover})=>{
      return cover
    })

    if(coverOnlyOne){
      return;
    }

    const selectImage = Array.from(e.target.files);

    const coverImage = selectImage.map((file)=>{
      return {file, alt: '123', cover : true, src : URL.createObjectURL(file)};
    })


    setImages((prev)=>{
      return [...prev, ...coverImage ]
    })

    coverImage.forEach(({src, alt})=>{
      editor?.chain().focus().setImage({src, alt}).run();
    })
  }

  async function submitHandler() {    
    if (images.length === 0) {
      return;
    }

    const formData = new FormData();

    formData.append("title", titleRef?.current!.value)
    formData.append("field", fieldRef?.current!.value);
    formData.append("blogContent", editor.getHTML());

    const metadataArray = images.map(({alt, src, cover})=>({alt, src, cover}))
    console.log(metadataArray);
    formData.append('metadata', JSON.stringify(metadataArray))

    images.forEach(({ file}) => {
      formData.append("images", file);
    });

    const response = await fetch("http://localhost:3000/blog/create", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    console.log(data);
  }

  return (
    <>
      <div className="text-white flex flex-col gap-2 mb-2">
        <div className="flex flex-row gap-2">
          <label>Title</label>
          <input ref={titleRef} className="border-[1px] rounded-sm" type="text"></input>
        </div>
        <div className="flex flex-row gap-2">
          <label>Field</label>
          <select ref={fieldRef} className="bg-black border-[1px] rounded-sm">
            <option value="React">React</option>
            <option value="Photoshop">Photoshop</option>
            <option value="TypeScript">TypeScript</option>
            <option value="JavaScript">JavaScript</option>
            <option value="NodeJS">NodeJS</option>
            <option value="NestJS">NestJS</option>
          </select>
        </div>
      </div>
      <div className="border p-4 rounded-lg">
        <div className="flex gap-2 mb-2 text-white">
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            className="px-2 py-1 border rounded"
          >
            Bold
          </button>
          <button
            className="px-2 py-1 border rounded"
            onClick={() => {
              coverInputRef?.current?.click();
            }}
          >
            Cover Image Add
          </button>
          <button
            className="px-2 py-1 border rounded"
            onClick={() => {
              inputRef?.current?.click();
            }}
          >
            Image Add
          </button>
          <button
            className="px-2 py-1 border rounded"
            onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          >
            Code Block
          </button>
          <input
            ref={inputRef}
            hidden
            type="file"
            multiple
            accept="image/*"
            onChange={handleFiles}
          ></input>
          <input
            ref={coverInputRef}
            hidden
            type="file"
            accept="image/*"
            onChange={handleFile}
          >
          </input>
        </div>

        <EditorContent editor={editor} className="text-white" />

        <button
          onClick={() => {
            submitHandler();
          }}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          저장
        </button>
      </div>
    </>
  );
}

export default BlogPost;
