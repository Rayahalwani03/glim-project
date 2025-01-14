const MostReadCard = () => {
  return (
    <>
      <div className="pr-20 bg-red-50 rounded-2xl max-w-[956px] shadow-[0px_0px_2px_rgba(40,41,61,0.04)] max-md:pr-5">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/fd83f88ea647baa5abe3deea83cf196790e69893553efac217dae279844fd9e4?placeholderIfAbsent=true&apiKey=0311e6e6127641af869fadc278c35703"
              alt=""
              className="object-contain grow w-full rounded-2xl aspect-[1.25] max-md:mt-10"
            />
          </div>

          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-start self-stretch my-auto w-full text-lg max-md:mt-10">
              <div className="text-base font-extrabold tracking-widest text-red-700 uppercase">
                Art {/*Category*/}
              </div>

              <h2 className="mt-5 text-3xl font-medium text-neutral-900">
                How Women Are Safeguarding Cultural Heritage {/*Title*/}
              </h2>

              <p className="self-stretch mt-5 leading-7 text-slate-800">
                The universe how far away concept of the number one Cambrian
                explosion {/*Details*/}
              </p>

              <button
                className="flex gap-0.5 mt-2.5 font-semibold leading-loose text-red-500"
                tabIndex="0"
                aria-label="Read more about how women are safeguarding cultural heritage"
              >
                <span className="grow">Read More</span>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/39fb2a9f9d7dac3e1b23b961a2dbd6966d027594d7e359d4d8e47a83648fc1c9?placeholderIfAbsent=true&apiKey=0311e6e6127641af869fadc278c35703"
                  alt=""
                  className="object-contain shrink-0 my-auto rounded aspect-[1.25] w-[30px]"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MostReadCard;
