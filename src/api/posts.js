const BASE_URL = "https://dummyjson.com/posts";
export const getPosts = async () => {
  const res = await fetch(`${BASE_URL}`);
  if (!res.ok) throw new Error("Failed to fetch posts");
  const data = await res.json();
  return data.posts.map((p) => ({
    id: p.id,
    title: p.title,
    body: p.body,
    category: p.tags?.[0] || "General",
    image: `https://picsum.photos/600/400?random=${p.id}`, // mock image since dummyjson doesn’t include one
  }));
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
