import { Link } from "react-router";

function NavItem({ to, children }) {
  return (
    <Link
      to={to}
      className="text-gray-700 hover:text-pink-400 transition-colors"
    >
      {children}
    </Link>
  );
}

export default NavItem;
