const TitleInput = ({ title, setTitle }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700">Title</label>
    <input
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      className="w-full mt-1 border rounded-lg px-3 py-2"
    />
  </div>
);
export default TitleInput;