import { Link } from "react-router";
import { Facebook, Instagram, Twitter } from "lucide-react";

function SocialIcons({ className = "" }) {
  const socials = [
    { to: "#", Icon: Facebook },
    { to: "#", Icon: Instagram },
    { to: "#", Icon: Twitter },
  ];

  return (
    <div className={`flex space-x-4 ${className}`}>
      {socials.map(({ to, Icon }, i) => (
        <Link
          key={i}
          to={to}
          className="text-gray-300 hover:text-pink-300 transition-colors"
        >
          <Icon className="w-5 h-5" />
        </Link>
      ))}
    </div>
  );
}

export default SocialIcons;
