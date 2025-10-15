import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePostStore } from "../../store/postStore";
import TitleInput from "./inputs/TitleInput";
import BodyInput from "./inputs/BodyInput";
import CategorySelect from "./inputs/CategorySelect";
import ImageUploader from "./inputs/ImageUploader";
import ProofreadButton from "./actions/ProofreadButton";
import PublishButton from "./actions/PublishButton";
import ProofResults from "./ProofResults";
import useProofreader from "../../hooks/useProofreader";
const PostForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [category, setCategory] = useState("General");
  const [imageBase64, setImageBase64] = useState("");
  const { proof, checking, proofread, clearProof } = useProofreader();
  const createPost = usePostStore((s) => s.createPost);
  const categories = usePostStore((s) => s.categories);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !body) return alert("Please provide title and body.");
    await createPost(title, body, category, imageBase64);
    setTitle("");
    setBody("");
    setCategory("Tech");
    setImageBase64("");
    clearProof();
    setTimeout(() => navigate("/"), 300);
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <TitleInput title={title} setTitle={setTitle} />
      <BodyInput body={body} setBody={setBody} />
      <div className="flex gap-4">
        <CategorySelect
          category={category}
          setCategory={setCategory}
          categories={categories}
        />
        <ImageUploader
          imageBase64={imageBase64}
          setImageBase64={setImageBase64}
        />
      </div>
      <div className="flex gap-3">
        <ProofreadButton
          checking={checking}
          proofread={() => proofread(body)}
        />
        <PublishButton />
      </div>
      {proof && <ProofResults proof={proof} />}
    </form>
  );
};
export default PostForm;
