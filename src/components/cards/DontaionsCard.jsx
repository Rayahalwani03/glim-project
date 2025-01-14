const DontaionsCard = () => {
  return (
    <div className="flex flex-col text-white rounded max-w-[496px]">
      <div className="flex relative flex-col items-start pt-80 pr-20 pb-8 pl-6 w-full rounded min-h-[550px] max-md:px-5 max-md:pt-24 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/bcb3ee74b214ae2cf1edc394eca43dc0ed4dfacc9531372191addb525965dcda?apiKey=0311e6e6127641af869fadc278c35703&"
          className="object-cover absolute inset-0 size-full"
          alt="University fundraising campaign for Kofi showing students in campus"
        />
        <div
          className="relative text-4xl w-[303px]"
          role="heading"
          aria-level="1"
          tabIndex="0"
        >
          University Fees for Kofi
        </div>
        <div className="relative mt-2 text-lg leading-7 w-[311px]" tabIndex="0">
          Aid Kofi by covering his tuition fees for a brighter future.
        </div>
      </div>
    </div>
  );
};

export default DontaionsCard;
