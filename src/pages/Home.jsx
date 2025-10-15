import { useState } from "react";
import Posts from "../components/posts/PostContainer";
import { usePostStore } from "../store/postStore";
const Home = () => {
  const categories = usePostStore((s) => s.categories);
  const selectedCategory = usePostStore((s) => s.selectedCategory);
  const setCategory = usePostStore((s) => s.setCategory);
  const [showAll, setShowAll] = useState(false);
  const visibleCategories = showAll ? categories : categories.slice(0, 5);
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-12 text-center mb-10 shadow-sm">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-3">
          Discover Great Stories
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Read, write, and share your thoughts. Explore insightful posts from
          creative minds.
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-between mb-8">
        <div className="flex gap-3 flex-wrap">
          <button
            onClick={() => setCategory("All")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              selectedCategory === "All"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            All
          </button>
          {visibleCategories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                selectedCategory === c
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {c}
            </button>
          ))}
          {categories.length > 5 && (
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="px-4 py-2 text-sm font-medium text-blue-600 hover:underline"
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          )}
        </div>
      </div>
      <Posts />
    </div>
  );
};
export default Home;
