import { Heart } from "lucide-react";

function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <div className="w-10 h-10 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full flex items-center justify-center">
        {/* Ignoramos el icono real por ahora */}
        <Heart className="w-6 h-6 text-white" />
      </div>
      <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
        Mira que Lindo
      </h1>
    </div>
  );
}

export default Logo;
