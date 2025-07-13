import ProductCard from "./ProductCard";
import Button from "../ui/Button";
import products from "../../data/products";

function FeaturedProducts() {
  return (
    <section id="productos" className="py-20 px-4 bg-white/50">
      <div className="container mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Productos Destacados
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubre nuestras piezas más populares, seleccionadas especialmente
            para hacer felices a los pequeños
          </p>
        </div>

        {/* Grid de productos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((prod) => (
            <ProductCard key={prod.id} product={prod} />
          ))}
        </div>

        {/* Botón ver todos */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-pink-200 text-pink-500 hover:bg-pink-25 px-8 py-3 bg-transparent"
          >
            Ver Todos los Productos
          </Button>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;
