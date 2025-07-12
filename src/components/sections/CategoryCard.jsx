import { Card, CardContent } from "../ui/Card";

function CategoryCard({ icon: Icon, title, age, description, color, bgColor }) {
  return (
    <Card
      className={`
        ${bgColor}
        border-0
        hover:shadow-xl
        transition-all
        duration-300
        hover:-translate-y-2
        cursor-pointer
      `}
    >
      <CardContent className="p-8 text-center">
        <div
          className={`
            w-16 h-16
            bg-gradient-to-r ${color}
            rounded-full
            flex items-center justify-center
            mx-auto mb-6
          `}
        >
          <Icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-sm font-medium text-gray-600 mb-3">{age}</p>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
}

export default CategoryCard;
