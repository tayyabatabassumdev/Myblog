import { useEffect } from "react";
import { usePostStore } from "../store/postStore";
import { Link } from "react-router-dom";
import { getPosts } from "../api/posts";
const PostContainer = () => {
  const posts = usePostStore((state) => state.posts);
  const setPosts = usePostStore((state) => state.setPosts);
  const removePost = usePostStore((state) => state.removePost);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getPosts();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    if (posts.length === 0) {
      fetchPosts();
    }
  }, [setPosts, posts.length]);
  const handleDelete = async (id) => {
    await removePost(id);
  };
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <div
          key={post.id}
          className="bg-white shadow-md rounded-xl p-5 flex flex-col justify-between hover:shadow-lg transition-all duration-300"
        >
          <div>
            <h2 className="font-semibold text-xl text-gray-800 line-clamp-2">
              {post.title}
            </h2>
            <p className="text-gray-600 mt-2 line-clamp-3">{post.body}</p>
          </div>
          <div className="flex justify-between mt-4">
            <Link
              to={`/post/${post.id}`}
              className="text-blue-600 font-medium hover:underline"
            >
              Read
            </Link>
            <button
              onClick={() => handleDelete(post.id)}
              className="text-red-500 hover:text-red-600 font-medium"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default PostContainer;