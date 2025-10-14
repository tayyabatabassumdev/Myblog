import { useParams, Link } from "react-router-dom";
import { usePostStore } from "../store/postStore";
const PostDetails = () => {
  const { id } = useParams();
  const posts = usePostStore((state) => state.posts);
  const post = posts.find((p) => p.id === Number(id));
  if (!post)
    return (
      <div className="text-center text-gray-700 mt-20">
        <p>Post not found.</p>
        <Link to="/" className="text-blue-600 underline mt-2 block">
          Go Back
        </Link>
      </div>
    );
  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white shadow-lg rounded-xl p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-3">{post.title}</h1>
      <p className="text-gray-600">{post.body}</p>
      <Link
        to="/"
        className="mt-6 inline-block text-blue-600 underline hover:text-blue-800"
      >
        Back to Home
      </Link>
    </div>
  );
};
export default PostDetails;
