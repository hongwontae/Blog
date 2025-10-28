import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import PlaceHolder from "@tiptap/extension-placeholder";

function BlogPost() {
  const editor = useEditor({
    extensions: [StarterKit, Image, Link, PlaceHolder.configure({
      placeholder : '여기에 블로그 내용을 입력하세요'
    })],
    content: "<p>Hello-World<p/>",
  });

  if (!editor) {
    return null;
  }

  function addImage(){
    const url = prompt('이미지 URL을 입력해주세요');
    if (url){
      editor.chain().focus().setImage({src : url}).run()
    }
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
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className="px-2 py-1 border rounded"
        >
          Italic
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className="px-2 py-1 border rounded"
        >
          H2
        </button>
        <button onClick={addImage} className="px-2 py-1 border rounded">
          이미지 삽입
        </button>
      </div>

      <EditorContent editor={editor} className="text-white" />

      <button
        onClick={() => {
          const html = editor.getHTML()
          const json = editor.getJSON()
          console.log({ html, json })
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
