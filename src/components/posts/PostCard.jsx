import { Link } from "react-router-dom";
const PostCard = ({ post, onDelete }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden">
      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          className="h-48 w-full object-cover"
        />
      )}
      <div className="p-5 flex flex-col flex-1 justify-between">
        <div>
          <p className="text-xs text-blue-600 font-semibold uppercase mb-1">
            {post.category}
          </p>
          <h2 className="text-xl font-bold mb-2 line-clamp-2 text-gray-800">
            {post.title}
          </h2>
          <p className="text-gray-600 text-sm line-clamp-3">{post.body}</p>
        </div>
        <div className="flex justify-between items-center mt-4">
          <Link
            to={`/post/${post.id}`}
            className="text-blue-600 text-sm font-medium hover:underline"
          >
            Read More
          </Link>
          <button
            onClick={() => onDelete(post.id)}
            className="text-red-500 hover:text-red-700 text-sm font-medium"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
export default PostCard;
