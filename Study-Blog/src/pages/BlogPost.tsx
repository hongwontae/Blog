import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import PlaceHolder from "@tiptap/extension-placeholder";
import { useState } from "react";

type ImageWithAlt = {
  file: File;
  alt: string;
};

function BlogPost() {
  const [images, setImages] = useState<ImageWithAlt[]>([]);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Image,
      Link,
      PlaceHolder.configure({
        placeholder: "여기에 블로그 내용을 입력하세요",
      }),
    ],
    content: "<p>Hello-World<p/>",
  });

  console.log(images);

  function handleFiles(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) {
      return;
    }
    const selectedFiles = Array.from(e.target.files);

    const filesWithAlt = selectedFiles.map((file) => {
      return {
        file,
        alt: "123",
      };
    });

    setImages((prev) => {
      return [...prev, ...filesWithAlt];
    });

    filesWithAlt.forEach(({ alt, file }) => {
      const url = URL.createObjectURL(file);
      editor?.chain().focus().setImage({ src: url, alt }).run();
    });
  }

  async function submitHandler() {
    if (images.length === 0) {
      return;
    }

    const formData = new FormData();

    formData.append("title", "Hellow-world");
    formData.append("field", "React");
    formData.append("blogContent", editor.getHTML());

    images.forEach(({ file, alt }) => {
      formData.append("images", file);
      formData.append("alt", alt);
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
      <div className="border p-4 rounded-lg">
        <div className="flex gap-2 mb-2 text-white">
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            className="px-2 py-1 border rounded"
          >
            Bold
          </button>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleFiles}
          ></input>
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
