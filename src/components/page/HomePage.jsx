import Header from "../layout/Header";
import HomeSection from "../sections/HomeSection";
import AgeCategories from "../sections/AgeCategories";
import FeaturedProducts from "../sections/FeaturedProducts";
import Testimonials from "../sections/Testimonials";
import Footer from "../layout/Footer";

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-blue-50 to-yellow-50">
      <Header />
      <HomeSection />
      <AgeCategories />
      <FeaturedProducts />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default HomePage;
