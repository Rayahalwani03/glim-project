
import HomePageDonationsSection from "../components/sections/homepage-sections/DontaionsSection";
import FAQSection from "../components/sections/homepage-sections/FAQSection";
import HeroSection from "../components/sections/homepage-sections/HeroSection";


import LatestPostsSection from "../components/sections/homepage-sections/LatestPostsSection";
import MostReadPostsSection from "../components/sections/homepage-sections/MostReadPostsSection";

function Home() {
  return (
    <>
      <div className="bg-white">
      <HeroSection/>
  

        <div className="mr-36 ml-36  ">
  
          <div className="py-12 ">
            <LatestPostsSection />
          </div>

          <div className="py- ">
            <MostReadPostsSection />
          </div>

       

          <HomePageDonationsSection/>
         <FAQSection/>
        </div>
      </div>
    </>
  );
}

export default Home;
