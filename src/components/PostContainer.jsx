import { useEffect, useMemo } from "react";
import { usePostStore } from "../store/postStore";
import { Link } from "react-router-dom";
import { getPosts } from "../api/posts";

const PostContainer = () => {
  const posts = usePostStore((state) => state.posts);
  const setPosts = usePostStore((state) => state.setPosts);
  const removePost = usePostStore((state) => state.removePost);
  const searchQuery = usePostStore((state) => state.searchQuery);
  const selectedCategory = usePostStore((state) => state.selectedCategory);

  // Fetch posts only once
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getPosts();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    if (posts.length === 0) fetchPosts();
  }, [setPosts, posts.length]);

  // Filter posts (memoized to avoid re-calculation)
  const filteredPosts = useMemo(() => {
    return posts.filter((p) => {
      const matchesSearch =
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.body.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || p.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [posts, searchQuery, selectedCategory]);

  const handleDelete = async (id) => {
    await removePost(id);
  };

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredPosts.map((post) => (
        <div
          key={post.id}
          className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
        >
          {post.image && (
            <img
              src={post.image}
              alt={post.title}
              className="h-48 w-full object-cover"
            />
          )}
          <div className="p-5 flex flex-col justify-between">
            <div>
              <h2 className="font-semibold text-xl text-gray-800 line-clamp-2">
                {post.title}
              </h2>
              <p className="text-gray-600 mt-2 line-clamp-3">{post.body}</p>
              {post.category && (
                <p className="mt-2 text-sm text-blue-600 font-medium">
                  #{post.category}
                </p>
              )}
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
        </div>
      ))}
    </div>
  );
};

export default PostContainer;
