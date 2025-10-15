import { Link } from "react-router-dom";
import { PenLine } from "lucide-react";
const NavLogo = () => (
  <Link
    to="/"
    className="flex items-center gap-3 text-2xl font-bold text-blue-600"
  >
    <PenLine size={26} />
    Postify
  </Link>
);
export default NavLogo;
