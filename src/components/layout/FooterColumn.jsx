import { Link } from "react-router";

function FooterColumn({ title, links }) {
  return (
    <div>
      <h4 className="text-lg font-semibold mb-4">{title}</h4>
      <ul className="space-y-2">
        {links.map(({ to, label }, i) => (
          <li key={i}>
            <Link
              to={to}
              className="text-gray-300 hover:text-pink-300 transition-colors"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterColumn;
