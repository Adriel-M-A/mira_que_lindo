import CategoryCard from "./CategoryCard";
import { Baby, Users, Smile, Heart } from "lucide-react";

// Datos de categorías
const categories = [
  {
    icon: Baby,
    title: "Recién Nacidos",
    age: "0-12 meses",
    description: "Ropa suave y cómoda para los más pequeñitos",
    color: "from-pink-300 to-pink-400",
    bgColor: "bg-pink-50",
  },
  {
    icon: Heart,
    title: "Bebés",
    age: "1-3 años",
    description: "Diseños adorables para sus primeros pasos",
    color: "from-purple-300 to-purple-400",
    bgColor: "bg-purple-50",
  },
  {
    icon: Smile,
    title: "Niños",
    age: "4-8 años",
    description: "Ropa divertida para jugar y explorar",
    color: "from-blue-300 to-blue-400",
    bgColor: "bg-blue-50",
  },
  {
    icon: Users,
    title: "Pre-adolescentes",
    age: "9-15 años",
    description: "Estilo moderno para los más grandes",
    color: "from-green-300 to-green-400",
    bgColor: "bg-green-50",
  },
];

function AgeCategories() {
  return (
    <section id="categorias" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Ropa para Cada Etapa
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Desde los primeros días hasta la adolescencia, tenemos la ropa
            perfecta para cada momento especial
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, idx) => (
            <CategoryCard key={idx} {...cat} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default AgeCategories;
