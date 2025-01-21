const DonationPageCard = () => {
  return (
    <>
      <div
        className="relative"
        style={{
          height: "390px",
          width: "312px",
          overflow: "hidden",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Background Image */}
        <div
          style={{
            backgroundImage: "url('blacksmilegril 1.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100%",
            width: "100%",
          }}
        ></div>

        {/* Content Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-4">
          <div>
            {/* Title */}
            <a  href="/donationcase" className="ml-2 text-white hover:underline">
              <h1 className="text-white text-lg sm:text-xl font-bold mb-2">
                fdssfdsf
                <span aria-hidden="true">&rarr;</span>
              </h1>
            </a>

            {/* Description with ellipsis */}
            <p
              className="text-white text-sm font-light truncate"
              style={{ width: "100%" }}
            >
              fdfdsfdsffdfdsfdsffdfdsfdsffdfdsfdsffdfdsfdsffdfdsfdsffdfdsfdsffdfdsfdsffdfdsfdsf
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DonationPageCard;
