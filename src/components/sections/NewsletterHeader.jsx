import { Gift } from "lucide-react";

function NewsletterHeader() {
  return (
    <div className="mb-8 text-center">
      <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-6">
        <Gift className="w-8 h-8 text-white" />
      </div>

      <h2 className="text-4xl font-bold text-gray-800 mb-4">
        ¡No te Pierdas Nuestras Ofertas!
      </h2>

      <p className="text-xl text-gray-600 mb-8">
        Suscríbete a nuestro newsletter y recibe un{" "}
        <span className="font-bold text-pink-500">15% de descuento</span> en tu
        primera compra, además de ofertas exclusivas y novedades.
      </p>
    </div>
  );
}

export default NewsletterHeader;
