import { create } from "zustand";
import { getPosts, addPost, deletePost } from "../api/posts";

export const usePostStore = create((set, get) => ({
  posts: [],
  categories: ["Tech", "Lifestyle", "Business", "Education", "Health"],
  selectedCategory: "All",
  searchQuery: "",
  setPosts: (posts) => set({ posts }),
  setSearchQuery: (query) => set({ searchQuery: query }),
  setCategory: (category) => set({ selectedCategory: category }),

  fetchPosts: async () => {
    try {
      const data = await getPosts();
      set({ posts: data });
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  },

  createPost: async (title, body, category, imageBase64) => {
    try {
      const newPost = { title, body, category, image: imageBase64, userId: 1 };
      const addedPost = await addPost(newPost);
      set({ posts: [...get().posts, addedPost] });
    } catch (error) {
      console.error("Error adding post:", error);
    }
  },

  removePost: async (id) => {
    try {
      await deletePost(id);
      set({ posts: get().posts.filter((post) => post.id !== id) });
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  },

  getFilteredPosts: () => {
    const { posts, searchQuery, selectedCategory } = get();
    return posts.filter((p) => {
      const matchesSearch =
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.body.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || p.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  },
}));
