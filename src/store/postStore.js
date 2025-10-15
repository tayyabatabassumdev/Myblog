import { create } from "zustand";
import { getPosts, addPost, deletePost } from "../api/posts";
export const usePostStore = create((set, get) => ({
  posts: [],
  categories: ["History", "French", "Magical", "Mystery", "Crime", "English","American","Fiction","Love","Classic"],
  selectedCategory: "All",
  searchQuery: "",
  setPosts: (posts) => set({ posts }),
  setSearchQuery: (searchQuery) => set({ searchQuery }),
  setCategory: (selectedCategory) => set({ selectedCategory }),
  fetchPosts: async () => {
  set({ isLoading: true, error: null });
  try {
    const data = await getPosts();
    const dynamicCategories = [...new Set(data.map(post => post.category || post.tag || "General").filter(Boolean))];
    set({ posts: data, categories: dynamicCategories, isLoading: false });
  } catch (error) {
    console.error("Error fetching posts:", error);
    set({ isLoading: false, error: error.message ?? "Failed to fetch posts" });
  }
},

  createPost: async (title, body, category, imageBase64) => {
    try {
      const newPost = {
        id: Date.now(),
        title,
        body,
        category,
        image:
          imageBase64 || `https://picsum.photos/800/500?random=${Date.now()}`,
      };
      set({ posts: [newPost, ...get().posts] });
    } catch (error) {
      console.error("Error adding post:", error);
    }
  },
  removePost: async (id) => {
    try {
      if (id < 500) {
        await deletePost(id);
      }
      set({ posts: get().posts.filter((p) => p.id !== id) });
    } catch (error) {
      console.error("Error deleting post:", error);
      set({ posts: get().posts.filter((p) => p.id !== id) });
    }
  },
}));
