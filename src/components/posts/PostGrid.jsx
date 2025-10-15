import PostCard from "./PostCard";
const PostGrid = ({ posts, onDelete }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} onDelete={onDelete} />
      ))}
    </div>
  );
};
export default PostGrid;
