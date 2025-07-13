import { Star } from "lucide-react";

/**
 * rating: número (p.ej. 4.7)
 * maxStars: cuántas estrellas pintar (por defecto 5)
 */
function RatingStars({ rating, maxStars = 5 }) {
  const fullStars = Math.floor(rating);
  return (
    <div className="flex items-center space-x-1">
      {[...Array(maxStars)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < fullStars ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
}

export default RatingStars;
