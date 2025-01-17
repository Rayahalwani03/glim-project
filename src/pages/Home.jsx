import HomePageBecomePublisherSection from "../components/sections/homepage-sections/BecomePublisherSection";
import HomePageDontaionsSection from "../components/sections/homepage-sections/DontaionsSection";
import FAQSection from "../components/sections/homepage-sections/FAQSection";
import HeroSection from "../components/sections/homepage-sections/HeroSection";
import LatestPostsSection from "../components/sections/homepage-sections/LatestPostsSection";
import MostReadPostsSection from "../components/sections/homepage-sections/MostReadPostsSection";

function Home() {
  return (
    <div className="bg-white">
      <HeroSection />
      <div className="mr-32 ml-36 mt-12 mb-12">
        <LatestPostsSection />

        <MostReadPostsSection />
        <HomePageBecomePublisherSection />
      </div>
      
     

      <div className="mr-32 ml-36 mt-12 mb-12">
        <HomePageDontaionsSection />
        <FAQSection />
      </div>
    </div>
  );
}

export default Home;
