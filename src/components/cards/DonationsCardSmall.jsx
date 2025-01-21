import React from "react";

const DonationsCardSmall = ({titleD,urlD,descriptionD,imgUrlD}) => {
  return (
    <>
      <div className="relative h-50 w-60  overflow-hidden shadow-lg">
        {/* Image */}
        <img
          src={imgUrlD}
          alt="Safe shelter for Asma's family"
          className="w-full h-full object-cover"
        />

        {/* Content Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-4">
          <div>
            {/* Title */}
            <a href={urlD} className="ml-2 text-white hover:underline">
              <h1 className="text-white text-xl font-bold mb-2">
                {titleD}
                <span aria-hidden="true">&rarr;</span>
              </h1>
            </a>
            {/* Description */}
            <p className="text-white text-sm font-light">{descriptionD}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DonationsCardSmall;
