import TestimonialCard from "./TestimonialCard";
import testimonials from "../../data/testimonials";

function Testimonials() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Lo que Dicen Nuestras Familias
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Miles de familias confían en nosotros para vestir a sus pequeños con
            amor y estilo
          </p>
        </div>

        {/* Grid de cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
