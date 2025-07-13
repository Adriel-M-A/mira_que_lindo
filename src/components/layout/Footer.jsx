import { Heart, Mail, Phone, MapPin } from "lucide-react";
import FooterColumn from "./FooterColumn";
import SocialIcons from "./SocialIcons";
import ContactItem from "./ContactItem";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo + Descripción + Sociales */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold">Mira que Lindo</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Vistiendo a los pequeños con amor, calidad y estilo desde 2020.
              Cada prenda está pensada para la comodidad y felicidad de tu hijo.
            </p>
            <SocialIcons />
          </div>

          {/* Columnas de enlaces */}
          <FooterColumn
            title="Categorías"
            links={[
              { to: "/#inicio", label: "Recién Nacidos" },
              { to: "/#categorias", label: "Bebés (1-3 años)" },
              { to: "/#productos", label: "Niños (4-8 años)" },
              { to: "/#pre-adolescentes", label: "Pre-adolescentes" },
              { to: "/#ofertas", label: "Ofertas Especiales" },
            ]}
          />

          <FooterColumn
            title="Ayuda"
            links={[
              { to: "/guia-tallas", label: "Guía de Tallas" },
              { to: "/envios", label: "Envíos y Devoluciones" },
              { to: "/faq", label: "Preguntas Frecuentes" },
              { to: "/contacto", label: "Contacto" },
              { to: "/terminos", label: "Términos y Condiciones" },
            ]}
          />

          {/* Contacto */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3">
              <ContactItem Icon={Mail}>hola@miraquelindo.com</ContactItem>
              <ContactItem Icon={Phone}>+1 (555) 123-4567</ContactItem>
              <ContactItem Icon={MapPin}>
                123 Calle Principal, Ciudad
              </ContactItem>
            </div>
          </div>
        </div>

        {/* Derechos */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-300">
            © {currentYear} Mira que Lindo. Todos los derechos reservados. Hecho
            con ❤️ para las familias.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
