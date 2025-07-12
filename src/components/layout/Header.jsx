import Logo from "../Logo";
import Navigation from "../Navigation";
import IconButton from "../ui/IconButton";
import { ShoppingBag, User } from "lucide-react";

function Header() {
  const cartItemCount = 3; // a modo de testeo pero se puede obtener de un contexto global

  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-pink-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Logo />

          <Navigation />

          <div className="flex items-center space-x-4">
            <IconButton icon={User} />
            <IconButton icon={ShoppingBag} badgeCount={cartItemCount} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
