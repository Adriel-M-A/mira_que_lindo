import { Card, CardContent } from "../ui/card";
import { Quote } from "lucide-react";
import Image from "../ui/Image";
import RatingStars from "./RatingStars";

function TestimonialCard({ name, role, content, rating, avatar }) {
  return (
    <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden">
      <CardContent className="p-8">
        {/* Icono de comillas */}
        <Quote className="w-8 h-8 text-pink-300 mb-4" />

        {/* Texto del testimonio */}
        <p className="text-gray-600 mb-6 leading-relaxed">"{content}"</p>

        {/* Estrellas */}
        <div className="flex items-center mb-6">
          <RatingStars rating={rating} />
        </div>

        {/* Avatar y datos */}
        <div className="flex items-center">
          <Image
            src={avatar}
            alt={name}
            width={60}
            height={60}
            className="rounded-full mr-4"
          />
          <div>
            <h4 className="font-bold text-gray-800">{name}</h4>
            <p className="text-sm text-gray-600">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default TestimonialCard;
