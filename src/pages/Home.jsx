import { usePostStore } from "../store/postStore";
import PostContainer from "../components/PostContainer";

const Home = () => {
  const { categories, selectedCategory, setCategory, searchQuery, setSearchQuery } =
    usePostStore();

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
        <h1 className="text-3xl font-bold text-gray-800">Explore Posts</h1>

        <input
          type="text"
          placeholder="Search posts..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-2 w-full sm:w-72 focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => setCategory("All")}
          className={`px-4 py-2 rounded-full ${
            selectedCategory === "All"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-4 py-2 rounded-full ${
              selectedCategory === cat
                ? "bg-blue-600 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <PostContainer />
    </div>
  );
};

export default Home;
