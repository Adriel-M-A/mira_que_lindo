import NewsletterHeader from "./NewsletterHeader";
import NewsletterForm from "./NewsletterForm";

function Newsletter() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-pink-50 via-purple-50 to-blue-50">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <NewsletterHeader />
          <NewsletterForm />
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
