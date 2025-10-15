
<img width="1919" height="559" alt="image" src="https://github.com/user-attachments/assets/af1b867c-5351-49c8-9ed6-598afdbae04d" />
<img width="1890" height="870" alt="image" src="https://github.com/user-attachments/assets/5c0fc43b-fb06-4bd2-aea5-fbbd8b52d18c" />
<img width="1918" height="867" alt="image" src="https://github.com/user-attachments/assets/9b666ceb-b347-409e-8ee1-d388ddc62675" />
<img width="1884" height="887" alt="image" src="https://github.com/user-attachments/assets/bbb66fd1-e4e4-4b05-9cb7-233c9ab06b71" />

# Postify

A modern **React blog application** where users can read, write, proofread, and manage blog posts — built using **React**, **Zustand**, and **Tailwind CSS**.

## Features

✅ Fetches posts dynamically from [DummyJSON API](https://dummyjson.com/posts)  
✅ Create new posts with image upload (stored in Base64)  
✅ Proofreading support via [LanguageTool API](https://languagetool.org)  
✅ Category filtering and search functionality  
✅ Persistent state management with Zustand  
✅ Delete posts (API + locally added)  
✅ Responsive, minimal, and elegant UI  

## Tech Stack

| Layer | Technology |
|-------|-------------|
| Frontend | React + Vite |
| State Management | Zustand |
| Styling | Tailwind CSS |
| Proofreading | LanguageTool API |
| API Source | DummyJSON Posts API |

## Folder Structure

src/
├── api/ # API helper functions
├── components/ # Reusable UI components
│ ├── Navbar/
│ ├── Form/
│ ├── Post/
│ └── Category/
├── pages/ # Route components (Home, AddPost, About, etc.)
├── store/ # Zustand store (postStore.js)
├── App.jsx # Main app layout
└── main.jsx # React entry point

##  Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/postify.git
   cd postify
Install dependencies

bash
Copy code
npm install
Run the development server

bash
Copy code
npm run dev
Open in browser

arduino
Copy code
http://localhost:5173
## Usage
Click Write in the navbar to create a post.
You can upload an image (Base64), select a category, and proofread before publishing.
Posts are fetched from DummyJSON.
Use the search bar to quickly find posts.
Click Delete to remove unwanted posts.

## Future Improvements
✅ User authentication
✅ Edit post functionality
🕓 Backend integration for real persistence
🕓 Dark mode toggle
🕓 Pagination and lazy loading

## License
This project is licensed under the MIT License — feel free to use and modify it.

## Author
Tayyaba Tabassum
