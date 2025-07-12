// src/components/pages/HomePage.jsx
import Header from "../layout/Header";
import HomeSection from "../sections/HomeSection";
import AgeCategories from "../sections/AgeCategories";

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-blue-50 to-yellow-50">
      <Header />
      <HomeSection />
      <AgeCategories />
    </div>
  );
}

export default HomePage;
