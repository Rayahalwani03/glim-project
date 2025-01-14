import AboutUsSection from "../components/sections/about-us-sections/AboutUsSection";
import BecomeChampion from "../components/sections/about-us-sections/BecomeChampionSection";
import Image from "../components/sections/about-us-sections/ImageAboutSection";

const AboutUs = () => {
  return (
    <>
      <Image />

      <div className="mr-32 ml-36 mt-12 mb-12">
        <AboutUsSection />
        <BecomeChampion />
      </div>
    </>
  );
};

export default AboutUs;
