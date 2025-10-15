import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-lg sticky top-0 z-50 backdrop-blur-md bg-opacity-90">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2965/2965879.png"
            alt="logo"
            className="w-8 h-8"
          />
          <span className="text-2xl font-bold tracking-tight">Postify</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm font-medium">
          {[
            { to: "/", label: "Home" },
            { to: "/add", label: "Add Post" },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`relative hover:text-gray-200 transition ${
                pathname === item.to ? "font-semibold after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-white" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-blue-700/90 px-6 py-4 space-y-4">
          <Link to="/" onClick={() => setOpen(false)} className="block">
            Home
          </Link>
          <Link to="/add" onClick={() => setOpen(false)} className="block">
            Add Post
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
