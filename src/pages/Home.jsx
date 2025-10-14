import { Link } from "react-router-dom";
import PostContainer from "../components/PostContainer";
const Home = () => {
  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">All Posts</h1>
        <Link
          to="/add"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md"
        >
          + Add Post
        </Link>
      </div>
      <PostContainer></PostContainer>
    </div>
  );
};
export default Home;
