
import DonateButton from "../../buttons/DonateButton";
import DonationsCardSmall from "../../cards/DonationsCardSmall";
import DontaionsCard from "../../cards/DontaionsCard";


const HomePageDonationsSection = () => {
  const donationItems = [
    {
      titleD: "Safe Shelter for Asma’s Family1",
      descriptionD:
        "Your support can provide a safe and secure shelter for Asma and her family.",
      imgUrlD: "/Images/littlegirl.png",
      urlD: "9308420",
    },
    {
      titleD: "University Fees for Kofi2",
      descriptionD:
        "Aid Kofi by covering his tuition fees for a brighter future.",
      imgUrlD: "/Images/smilestuff.png",
      urlD: "9308420",
    },
    {
      titleD: "University Fees for Kofi3",
      descriptionD:
        "Aid Kofi by covering his tuition fees for a brighter future.",
      imgUrlD: "/Images/smilestuff.png",
      urlD: "9308420",
    },
    {
      titleD: "University Fees for Kofi4",
      descriptionD:
        "Aid Kofi by covering his tuition fees for a brighter future.",
      imgUrlD: "/Images/smilestuff.png",
      urlD: "9308420",
    },
    {
      titleD: "University Fees for Kofi5",
      descriptionD:
        "Aid Kofi by covering his tuition fees for a brighter future.",
      imgUrlD: "/Images/smilestuff.png",
      urlD: "9308420",
    },
  ];

  return (
    <section className="py-10 ">
      <div className="container px-4">
        <h2 className="text-3xl font-bold mb-8">Donations</h2>

        {/* Left pic */}
        <div className="flex gap-3">
          <div>
            <DontaionsCard
              titleD={donationItems[0].titleD}
              descriptionD={donationItems[0].descriptionD}
              imgUrlD={donationItems[0].imgUrlD}
              urlD={donationItems[0].urlD}
            />
           
          </div>

          {/* Right pics */}
          <div className="grid grid-cols-2 grid-rows-2 gap-3 h-96">
            {donationItems.slice(1, 5).map((item, index) => (
              <DonationsCardSmall
                key={index}
                titleD={item.titleD}
                descriptionD={item.descriptionD}
                imgUrlD={item.imgUrlD}
                urlD={item.urlD}
              />


            ))}
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <DonateButton/>
        </div>
      </div>
    </section>
  );
};

export default HomePageDonationsSection;
