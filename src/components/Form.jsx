import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePostStore } from "../store/postStore";
const Form = () => {
const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const createPost = usePostStore((state) => state.createPost);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !body) return alert("Please fill all fields");
    createPost( title, body );
    navigate("/");
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-gray-700 mb-1 font-medium">Title</label>
          <input
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1 font-medium">Body</label>
          <textarea
            placeholder="Write your post..."
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 h-28 focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition duration-200"
        >
          Submit
        </button>
      </form>
  )
}
export default Form