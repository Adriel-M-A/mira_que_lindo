import Button from "../ui/Button";
import InputWithIcon from "../ui/InputWithIcon";

function NewsletterForm() {
  return (
    <div className="max-w-md mx-auto">
      <form className="flex flex-col sm:flex-row gap-4">
        <InputWithIcon type="email" placeholder="tu@email.com" />
        <Button className="bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-white px-8 py-3 text-lg">
          Suscribirse
        </Button>
      </form>
      <p className="text-sm text-gray-500 mt-4">
        No spam, solo ofertas increíbles. Puedes cancelar cuando quieras.
      </p>
    </div>
  );
}

export default NewsletterForm;
