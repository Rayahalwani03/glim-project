const SearchBar = () => {
  return (
    <>
      <div className="flex items-center gap-2 mb-9">
        <div className="relative max-w-xs flex-grow">
          <img
            src="/Icons/search.png"
            alt="Search Icon"
            className="absolute w-5 h-5 top-2.5 left-2.5 text-slate-600"
          />
          <input
            type="text"
            className="pl-10 py-2 border bg-lightGray rounded-r-lg w-full placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300"
            placeholder="Post name or keywords..."
          />
        </div>

        <button className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Hi
        </button>
        <button className="py-2 px-4 bg-indigo-500 text-white rounded-md hover:bg-gray-600">
          Search
        </button>
      </div>
    </>
  );
};

export default SearchBar;
