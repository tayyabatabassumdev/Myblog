const BASE_URL = "https://dummyjson.com/posts";
export const getPosts = async () => {
  const res = await fetch(`${BASE_URL}?limit=24`);
  if (!res.ok) throw new Error("Failed to fetch posts");
  const data = await res.json();
  return data.posts.map((p) => ({
    id: p.id,
    title: p.title || (p.body ? p.body.slice(0, 60) : "Untitled"),
    body: p.body || "",
    image: p.image || `https://picsum.photos/800/500?random=${p.id}`,
    category: (p.tags && p.tags[0]) || "General",
    tags: p.tags || [],
    publishDate: p.publishDate || null,
  }));
};
export const addPost = async (newPost) => {
  const res = await fetch(`${BASE_URL}/add`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: newPost.title,
      body: newPost.body,
      tags: [newPost.category],
      image: newPost.image,
    }),
  });
  if (!res.ok) throw new Error("Failed to add post");
  const p = await res.json();
  return {
    id: p.id ?? Date.now(),
    title: p.title,
    body: p.body,
    image:
      p.image ||
      newPost.image ||
      `https://picsum.photos/800/500?random=${Date.now()}`,
    category: p.tags?.[0] || newPost.category || "General",
  };
};
export const deletePost = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Failed to delete post");
  return id;
};
