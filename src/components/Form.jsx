import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePostStore } from "../store/postStore";

const Form = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [category, setCategory] = useState("Tech");
  const [imageBase64, setImageBase64] = useState("");
  const [proofreadText, setProofreadText] = useState("");
  const [proofreading, setProofreading] = useState(false);

  const createPost = usePostStore((state) => state.createPost);
  const categories = usePostStore((state) => state.categories);
  const navigate = useNavigate();

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => setImageBase64(reader.result);
    if (file) reader.readAsDataURL(file);
  };

  const handleProofread = async () => {
    setProofreading(true);
    try {
      // Simple mock API call for proofreading (replace with actual API if needed)
      const res = await fetch("https://api.languagetool.org/v2/check", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ text: body, language: "en-US" }),
      });
      const data = await res.json();
      if (data.matches.length > 0) {
        const issues = data.matches
          .map((m) => `• ${m.message} (Suggestion: ${m.replacements[0]?.value || "None"})`)
          .join("\n");
        setProofreadText(issues);
      } else {
        setProofreadText("✅ No major issues found!");
      }
    } catch {
      setProofreadText("Error proofreading text.");
    } finally {
      setProofreading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !body) return alert("Please fill all fields");
    createPost(title, body, category, imageBase64);
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
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div>
        <label className="block text-gray-700 mb-1 font-medium">Body</label>
        <textarea
          placeholder="Write your post..."
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 h-28 focus:ring-2 focus:ring-blue-400"
        ></textarea>
      </div>

      <div>
        <label className="block text-gray-700 mb-1 font-medium">Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-3 py-2"
        >
          {categories.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-gray-700 mb-1 font-medium">Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="w-full"
        />
        {imageBase64 && (
          <img
            src={imageBase64}
            alt="Preview"
            className="mt-3 w-40 h-40 object-cover rounded-lg shadow"
          />
        )}
      </div>

      <button
        type="button"
        onClick={handleProofread}
        disabled={proofreading}
        className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-lg font-semibold"
      >
        {proofreading ? "Checking..." : "Proofread"}
      </button>
      {proofreadText && (
        <pre className="bg-gray-100 p-3 rounded-lg text-sm text-gray-700 overflow-auto max-h-40">
          {proofreadText}
        </pre>
      )}

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold"
      >
        Publish
      </button>
    </form>
  );
};

export default Form;
