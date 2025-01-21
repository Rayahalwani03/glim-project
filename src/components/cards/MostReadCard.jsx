const MostReadCard = () => {
  return (
<>
  <div className="bg-indigo-50 rounded-lg shadow-lg mb-3 flex max-w-3xl h-56">
    {/* Wrapping the whole card content in <a> */}
    <a href="/post" className="flex w-full h-full">
      <img
        src="Images/Himage.png"
        alt="Music"
        className="w-1/3 h-full object-cover rounded-l-lg"
      />

      <div className="p-4 flex-1 flex flex-col justify-around">
        <h1 className="text-indigo-600 mt-2 mb-2 uppercase text-xs font-semibold">
          music
        </h1>

        <div>
          <h4 className="mt-2  text-gray-950 text-2xl">
            How Women Are Safeguarding Cultural Heritage
          </h4>
          <p className="text-gray-600 text-sm">
            The universe how far away conceptw far away concept of thew far away concept of thew far away concept of thew far away concept of thew far away concept of thew far away concept of the of the number one Cambrian explosion...
          </p>
        </div>

        <span className="text-indigo-600 text-xs mt-2 mb-2">
          Read More <span aria-hidden="true">&rarr;</span>
        </span>
      </div>
    </a>
  </div>
</>

  );
};

export default MostReadCard;
