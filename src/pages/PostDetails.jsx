import { useParams, Link } from "react-router-dom";
import { usePostStore } from "../store/postStore";
const PostDetails = () => {
  const { id } = useParams();
  const posts = usePostStore((s) => s.posts);
  const post = posts.find((p) => Number(p.id) === Number(id));
  if (!post) return <div className="text-center py-20">Post not found. <Link to="/" className="text-blue-600">Go home</Link></div>;
  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        {post.image && <img src={post.image} alt={post.title} className="w-full h-72 object-cover" />}
        <div className="p-8">
          <h1 className="text-4xl font-bold mb-3">{post.title}</h1>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full">#{post.category}</span>
            {post.publishDate && <span className="text-sm text-gray-500">{new Date(post.publishDate).toLocaleDateString()}</span>}
          </div>
          <div className="prose max-w-none text-gray-700">{post.body}</div>
          <Link to="/" className="inline-block mt-6 text-blue-600">← Back to Home</Link>
        </div>
      </div>
    </div>
  );
};
export default PostDetails;
