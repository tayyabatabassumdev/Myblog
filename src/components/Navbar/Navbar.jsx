import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLocation } from "react-router-dom";
import NavLogo from "./NavLogo";
import NavLinks from "./NavLinks";
import NavSearch from "./NavSearch";
import MobileMenu from "./MobileMenu";
const Navbar = () => {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [
    { to: "/", label: "Home" },
    { to: "/add", label: "Write" },
    { to: "/about", label: "About" },
  ];
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <NavLogo />
        <div className="hidden md:flex items-center gap-6">
          <NavLinks items={navItems} activePath={pathname} />
          <NavSearch />
        </div>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-600"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      {menuOpen && <MobileMenu items={navItems} setMenuOpen={setMenuOpen} />}
    </header>
  );
};
export default Navbar;
