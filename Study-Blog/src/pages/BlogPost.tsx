import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import { useRef, useState } from "react";

type ImageWithAlt = {
  file: File;
  alt: string;
};
function BlogPost() {
  const [images, setImages] = useState<ImageWithAlt[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const editor = useEditor({
    extensions: [StarterKit, Image, Link],
    content: "<p>블로그 글은 여기서 작성해주세요.<p/>",
  });

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
          <button
            className="px-2 py-1 border rounded"
            onClick={() => {
              inputRef?.current?.click();
            }}
          >
            Image Add
          </button>
          <input
            ref={inputRef}
            hidden
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
