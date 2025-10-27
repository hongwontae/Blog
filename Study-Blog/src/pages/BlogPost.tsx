import MDEditor from '@uiw/react-md-editor';
import {useState} from 'react';

function BlogPost(){

  const [title, setTitle] = useState('');
  const [field, setField] = useState('');
  const [content, setContent] = useState('');
  const [images, setImages] = useState<File[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImages(Array.from(e.target.files));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('field', field);
    formData.append('blogContent', content);

    images.forEach(file => formData.append('images', file));
  };

  return (
    <div className="p-4 max-w-2xl mx-auto text-white">
      <h1 className="text-xl font-bold mb-4">Create Blog Post</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
          className="border p-2 rounded text-white"
        />
        <input
          type="text"
          placeholder="Field"
          value={field}
          onChange={e => setField(e.target.value)}
          required
          className="border p-2 rounded text-white"
        />
        <MDEditor value={content} onChange={(e)=>setContent(e)} />
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleFileChange}
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
}

export default BlogPost;