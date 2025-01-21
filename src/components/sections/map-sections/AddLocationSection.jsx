import { useState } from "react";
import LocationForm from "../../modals/LocationForm";

const AddLocationSection = () => {
  // State to manage the modal
  const [isFormOpen, setFormOpen] = useState(false);

  // Function to open the modal
  const openForm = () => {
    setFormOpen(true);
  };

  // Function to close the modal
  const closeLocationForm = () => {
    setFormOpen(false);
  };

  return (
    <div>
      <section>
        {isFormOpen && <LocationForm closeLocationForm={closeLocationForm} />}

        <div>
          <button
            className="flex bg-indigo-600 text-white rounded p-2"
            onClick={openForm} // This will open the modal
          >
            Suggest New Location
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
        </div>
      </section>
    </div>
  );
};

export default AddLocationSection;
