import { Search } from "lucide-react";
import { usePostStore } from "../../store/postStore";
const NavSearch = () => {
  const setSearchQuery = usePostStore((s) => s.setSearchQuery);
  return (
    <div className="relative">
      <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
      <input
        onChange={(e) => setSearchQuery(e.target.value.trim())}
        placeholder="Search posts..."
        className="pl-9 pr-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
      />
    </div>
  );
};
export default NavSearch;
