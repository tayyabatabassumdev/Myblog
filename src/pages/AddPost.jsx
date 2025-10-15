import PostForm from "../components/Form/PostForm";
const AddPost = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-3">Write a new post</h1>
        <p className="text-gray-600 mb-6">Proofread before publishing, upload an image, choose a category and preview.</p>
        <PostForm />
      </div>
    </div>
  );
};
export default AddPost;
