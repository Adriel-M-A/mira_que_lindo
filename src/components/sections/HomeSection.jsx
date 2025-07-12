import Button from "../ui/Button";
import { Star, Sparkles } from "lucide-react";
import Image from "../ui/Image";

function HomeSection() {
  return (
    <section id="inicio" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Izquierda */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Sparkles className="w-6 h-6 text-yellow-500" />
                <span className="text-sm font-medium text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                  ¡Ropa adorable para los más pequeños!
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Mira que Lindo
                </span>
                <br />
                <span className="text-gray-800">es vestir a tu bebé</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Descubre nuestra colección de ropa infantil desde recién nacidos
                hasta los 15 años. Calidad, comodidad y estilo para cada etapa
                de crecimiento.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="rounded-lg bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-white px-8 py-3 text-lg"
              >
                Ver Colección
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 rounded-lg border-pink-200 text-pink-500 hover:bg-pink-25 hover:text-black px-8 py-3 text-lg bg-transparent"
              >
                Ofertas Especiales
              </Button>
            </div>

            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <div className="text-sm text-gray-600">
                <span className="font-semibold">4.9/5</span> de 2,500+ familias
                felices
              </div>
            </div>
          </div>

          {/* Derecha: imagen decorativa */}
          <div className="relative">
            <div className="relative z-10">
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="Ropa infantil adorable"
                width={500}
                height={500}
                className="rounded-3xl shadow-2xl"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-200 rounded-full opacity-80" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-pink-200 rounded-full opacity-80" />
            <div className="absolute top-1/2 -right-8 w-12 h-12 bg-blue-200 rounded-full opacity-60" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeSection;
