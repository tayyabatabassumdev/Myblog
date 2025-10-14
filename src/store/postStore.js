import { create } from "zustand";
import { getPosts, addPost, deletePost } from "../api/posts";
export const usePostStore = create((set, get) => ({
  posts: [],
  setPosts: (posts) => set({ posts }),
  fetchPosts: async () => {
    try {
      const data = await getPosts();
      set({ posts: data });
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  },
  createPost: async (title, body) => {
    try {
      const newPost = { title, body, userId: 1 };
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
}));
