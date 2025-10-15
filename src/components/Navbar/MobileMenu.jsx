import { Link } from "react-router-dom";
const MobileMenu = ({ items, setMenuOpen }) => {
  return (
    <div className="md:hidden bg-white shadow-md py-4">
      <div className="flex flex-col items-center gap-4">
        {items.map((it) => (
          <Link
            key={it.to}
            to={it.to}
            onClick={() => setMenuOpen(false)}
            className="text-gray-700"
          >
            {it.label}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default MobileMenu;
