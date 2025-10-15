const ImageUploader = ({ imageBase64, setImageBase64 }) => {
  const handleImage = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => setImageBase64(reader.result);
    reader.readAsDataURL(file);
  };
  return (
    <div className="flex-1">
      <label className="block text-sm font-medium text-gray-700">Image</label>
      <input
        type="file"
        accept="image/*"
        onChange={handleImage}
        className="w-full mt-1"
      />
      {imageBase64 && (
        <img
          src={imageBase64}
          alt="preview"
          className="mt-3 w-48 h-32 object-cover rounded-lg shadow"
        />
      )}
    </div>
  );
};
export default ImageUploader;
