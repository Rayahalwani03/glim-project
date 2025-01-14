import ApplyButton from "../../buttons/ApplyButton";

const BecomeChampion = () => {
  return (
    <>
      <section
        id="become-publisher-section"
        className=" mr-36 ml-36 mt-12 mb-12 "
      >
        <div className=" flex justify-between items-center  rounded-lg bg-red-600"></div>
      </section>

      <div className="relative inline-block">
        <img src="applypublisher.png" alt="" className="w-full h-auto" />
        <div className="absolute inset-0 flex items-center justify-between  bg-opacity-30 text-white p-8">
          <h1 className="text-2xl font-bold ml-20">
            Become a champion for women today
          </h1>
          <ApplyButton />
        </div>
      </div>
    </>
  );
};

export default BecomeChampion;
