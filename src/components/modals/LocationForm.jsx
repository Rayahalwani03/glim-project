
export default function LocationForm({closeLocationForm}) {



  return (
<div
  id="new-location-popup"
  tabIndex="-1"
  className="bg-black/50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[999] h-full items-center justify-center popup flex"
>
  <div className="relative p-4 w-full max-w-lg h-full md:h-auto"> {/* Updated width */}
    <div className="relative bg-white rounded-lg shadow popup-body">
      <button
        type="button"
        onClick={closeLocationForm}
       
        className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center popup-close"
      >
        <svg
          aria-hidden="true"
          className="w-5 h-5"
          fill="#c6c7c7"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
        <span className="sr-only">Close popup</span>
      </button>
      <div className="p-5">
        <h3 className="text-2xl mb-4 font-medium">Add Your Suggestion to the Map</h3>
        <p className="mb-4 text-sm font-normal text-gray-800">
          Fill in the details below to suggest a new location to be added to the map.
        </p>

        <form className="space-y-4">
          {/* Title and Category Inline */}
          <div className="flex gap-4"> {/* Flex container for inline fields */}
            <div className="flex-1">
              <label htmlFor="location-title" className="block text-sm font-medium text-gray-700">
                Title
              </label>
              <input
                id="location-title"
                name="title"
                type="text"
                required
                className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                placeholder="Enter location title"
              />
            </div>

            <div className="flex-1">
              <label htmlFor="location-category" className="block text-sm font-medium text-gray-700">
                Category
              </label>
              <select
                id="location-category"
                name="category"
                required
                className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
              >
                <option value="">Select Category</option>
                <option value="Clinic">Clinic</option>
                <option value="Shelter">Shelter</option>
                <option value="School">School</option>
                <option value="Lawyer">Lawyer</option>
              </select>
            </div>
          </div>

          {/* Description */}
          <div>
            <label htmlFor="location-desc" className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              id="location-desc"
              name="description"
              required
              className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
              placeholder="Enter location description"
            ></textarea>
          </div>

          {/* URL */}
          <div>
            <label htmlFor="location-url" className="block text-sm font-medium text-gray-700">
              URL
            </label>
            <input
              id="location-url"
              name="url"
              type="url"
              required
              className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
              placeholder="Enter URL"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="location-email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="location-email"
              name="email"
              type="email"
              required
              className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
              placeholder="Enter contact email"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="location-phone" className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              id="location-phone"
              name="phoneNumber"
              type="tel"
              required
              className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
              placeholder="Enter contact phone number"
            />
          </div>

          {/* Submit Button */}
          <div className="flex items-center gap-4 mt-4">
            <button
              type="submit"
              className="group relative inline-block w-full rounded-lg border border-transparent bg-black py-2 px-4 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-1"
            >
              Submit Suggestion
            </button>
            <button
              type="button"
              onClick={closeLocationForm}
              className="group relative inline-block w-full rounded-lg border border-transparent bg-gray-300 py-2 px-4 text-sm font-medium text-black focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-1"
               // Close the popup when clicked
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>


  );
}
