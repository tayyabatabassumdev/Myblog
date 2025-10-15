const BodyInput = ({ body, setBody }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700">Body</label>
    <textarea
      value={body}
      onChange={(e) => setBody(e.target.value)}
      rows={8}
      className="w-full mt-1 border rounded-lg px-3 py-2"
    ></textarea>
  </div>
);
export default BodyInput;
