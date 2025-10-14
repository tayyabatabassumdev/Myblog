const BASE_URL = "https://jsonplaceholder.typicode.com/posts";
export const getPosts = async () => {
  const res = await fetch(`${BASE_URL}?_limit=12`);
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
};
export const addPost = async (newPost) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newPost),
  });
  if (!res.ok) throw new Error("Failed to add post");
  return res.json();
};
export const deletePost = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Failed to delete post");
  return id;
};
