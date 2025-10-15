import { Link } from "react-router-dom";
const NavLinks = ({ items, activePath }) => {
  return (
    <>
      {items.map((it) => (
        <Link
          key={it.to}
          to={it.to}
          className={`text-gray-700 hover:text-blue-600 ${
            activePath === it.to ? "font-semibold" : ""
          }`}
        >
          {it.label}
        </Link>
      ))}
    </>
  );
};
export default NavLinks;
