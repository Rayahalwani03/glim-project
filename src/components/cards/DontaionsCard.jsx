const DontaionsCard = ({titleD,urlD,descriptionD,imgUrlD}) => {
  return (
    <>
    <div className="relative h-72 w-full sm:w-80 md:w-96 lg:w-96 xl:w-80 overflow-hidden shadow-lg">
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
            <h1 className="text-white text-lg sm:text-xl font-bold mb-2">
              {titleD}
              <span aria-hidden="true">&rarr;</span>
            </h1>
          </a>
          {/* Description */}
          <p className="text-white text-sm font-light">
            {descriptionD}
          </p>
        </div>
      </div>
    </div>
  </>

  );
};

export default DontaionsCard;

