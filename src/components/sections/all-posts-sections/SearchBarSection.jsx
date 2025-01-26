import Button from "../../buttons/Button";

const SearchBar = () => {
  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search clicked!");
    // Add your search logic here (e.g., API call, filter results, etc.)
  };

  return (
    <section>
      <form onSubmit={handleSearch} className="flex items-center mb-9">
        {/* Search Input */}
        <div className="relative max-w-xs flex-grow">
          <img
            src="/Icons/search.png"
            alt="Search Icon"
            className="absolute w-5 h-5 top-2.5 left-2.5 text-slate-600"
          />
          <input
            type="text"
            name="searchQuery" // Added name for form submission
            className="pl-10 py-2 border bg-lightGray rounded-r-lg w-full placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300"
            placeholder="Post name or keywords..."
          />
        </div>

        {/* Category Dropdown and Search Button */}
        <div className="flex items-center gap-4 ml-3">
          {/* Dropdown */}
          <div className="flex-1">
            <select
              id="location-category"
              name="category"
              required
              className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
            >
              <option value="">Select Category</option>
              <option value="History">History</option>
              <option value="Tech">Tech</option>
              <option value="Mental Health">Mental Health</option>
              <option value="Culture">Culture</option>
            </select>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            label="Search"
            className="py-2 px-4 bg-indigo-500 text-white rounded-md hover:bg-gray-600"
          />
        </div>
      </form>
    </section>
  );
};

export default SearchBar;
