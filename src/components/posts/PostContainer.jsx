import { useEffect } from "react";
import { usePostStore } from "../../store/postStore";
import PostGrid from "./PostGrid";
import EmptyState from "./EmptyState";
const PostContainer = () => {
  const { posts, fetchPosts, removePost, selectedCategory, searchQuery } =
    usePostStore();
  useEffect(() => {
    if (posts.length === 0) fetchPosts();
  }, [fetchPosts, posts.length]);
  const filteredPosts = posts.filter((post) => {
    const categoryMatch =
      selectedCategory === "All" ||
      post.category === selectedCategory ||
      post.tag === selectedCategory;
    const searchMatch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.body.toLowerCase().includes(searchQuery.toLowerCase());
    return categoryMatch && searchMatch;
  });
  return filteredPosts.length > 0 ? (
    <PostGrid posts={filteredPosts} onDelete={removePost} />
  ) : (
    <EmptyState />
  );
};

export default PostContainer;
