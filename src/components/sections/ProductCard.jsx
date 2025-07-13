import { Card, CardContent } from "../ui/Card";
import Button from "../ui/Button";
import { Heart, ShoppingCart } from "lucide-react";
import Image from "../ui/Image";
import RatingStars from "./RatingStars";

function ProductCard({ product }) {
  const {
    name,
    price,
    originalPrice,
    image,
    rating,
    reviews,
    category,
    isNew,
  } = product;

  // cálculo de descuento en porcentaje
  const discountPercent = originalPrice
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : null;

  return (
    <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-0 overflow-hidden">
      {/* Imagen + badge Nuevo + favorito */}
      <div className="relative">
        <Image
          src={image}
          alt={name}
          height={300}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {isNew && (
          <span className="absolute top-4 left-4 bg-gradient-to-r from-pink-300 to-purple-400 text-white px-3 py-1 rounded-full text-xs font-medium">
            ¡Nuevo!
          </span>
        )}

        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 bg-white/80 hover:bg-white text-gray-600 hover:text-pink-400"
        >
          <Heart className="w-4 h-4" />
        </Button>
      </div>

      {/* Contenido */}
      <CardContent className="p-6">
        {/* Categoría */}
        <div className="mb-2">
          <span className="text-xs font-medium text-purple-500 bg-purple-50 px-2 py-1 rounded-full">
            {category}
          </span>
        </div>

        {/* Nombre */}
        <h3 className="text-lg font-bold text-gray-800 mb-2">{name}</h3>

        {/* Rating */}
        <div className="flex items-center mb-3">
          <RatingStars rating={rating} />
          <span className="text-sm text-gray-600 ml-2">({reviews})</span>
        </div>

        {/* Precio y descuento */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-gray-800">${price}</span>
            {originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                ${originalPrice}
              </span>
            )}
          </div>
          {discountPercent && (
            <span className="text-sm font-medium text-green-600 bg-green-100 px-2 py-1 rounded-full">
              -{discountPercent}%
            </span>
          )}
        </div>

        {/* Botón añadir al carrito */}
        <Button className="w-full bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-white">
          <ShoppingCart className="w-4 h-4 mr-2" />
          Agregar al Carrito
        </Button>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
