import FindOutButton from "../../buttons/FindOutButton";
function HeroSection() {
  return (
    <>
      <div>
        <section className="bg-gray-800 py-20 text-left px-12 py-9 flex items-center justify-between">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center min-h-[200px]">
            {/* Left Side */}
            <div className="text-left px-6  ">
              <h1
                className="text-4xl 
                font-bold
                text-white"
              >
                The Difference We’ve Made Together
              </h1>
              <p
                className="mt-4 
                text-lg
                text-white"
              >
                Discover the areas where we work and see how your support has
                made a lasting difference—transforming lives through food,
                education, and empowerment across the globe.
              </p>
              <FindOutButton
                className="donation-hero-btn mt-6 
                            px-6 
                            py-3"
                name="Donate Now"
              />
            </div>

            {/* Right Side */}
            <div className="flex justify-center">
              <img
                src="Planetmap.png"
                alt="Hero Image"
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default HeroSection;
