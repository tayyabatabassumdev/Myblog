import { Link, useLocation } from "react-router-dom";
const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <nav className="bg-blue-600 text-white px-6 py-3 shadow-md">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-lg font-bold">
          Postify
        </Link>
        <div className="space-x-6">
          <Link
            to="/"
            className={`hover:text-gray-200 ${
              pathname === "/" ? "underline font-semibold" : ""
            }`}
          >
            Home
          </Link>
          <Link
            to="/add"
            className={`hover:text-gray-200 ${
              pathname === "/add" ? "underline font-semibold" : ""
            }`}
          >
            Add Post
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
