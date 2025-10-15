const CategorySelect = ({ category, setCategory, categories }) => (
  <div className="flex-1">
    <label className="block text-sm font-medium text-gray-700">Category</label>
    <select
      value={category}
      onChange={(e) => setCategory(e.target.value)}
      className="w-full mt-1 border rounded-lg px-3 py-2"
    >
      {categories.map((c) => (
        <option key={c}>{c}</option>
      ))}
    </select>
  </div>
);
export default CategorySelect;
