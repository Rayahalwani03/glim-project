import { useState } from "react";
import Input from "../../inputs/Input";

const Case = () => {
  const [clicked, setClicked] = useState(false);

  function handleAmountClicked() {
    setClicked(!clicked);
  }

  return (
    <>
      <div className="bg-gray-50 shadow rounded-md flex p-6 w-full max-w-full">
        {/* Img */}
        <div className="flex-shrink-0">
          <img
            id="case-img"
            src="/public/Images/littlegirl.png"
            alt="Amina's Journey"
            className="w-64 h-94 rounded-md"
          />
        </div>

        {/* Details */}
        <div className="ml-4 w-full max-w-full overflow-hidden">
          <div>
            <h1 id="case-title" className="text-2xl font-bold">
              Amina’s Journey to Motherhood
            </h1>
            <p
              id="case-story"
              className="text-sm mt-2 mb-2 break-words overflow-hidden"
            >
              sdsaidjasdjsdsaidjasdjsdsaidjasdjsdsaidjasdjsdsaidjasdjsdsaidjasdjsdsaidjasdjsdsaidjasdjsdsaidjasdjsdsaidjasdjsdsaidjasdjsdsaidjasdjsdsaidjasdjsdsaidjasdjsdsaidjasdjsdsaidjasdjsdsaidjasdjsdsaidjasdjsdsaidjasdjsdsaidjasdjsdsaidjasdjsdsaidjasdjsdsaidjasdjsdsaidjasdjsdsaidjasdjsdsaidjasdjsdsaidjasdjsdsaidjasdj.
            </p>
          </div>

          {/* Radio Buttons */}
          <div>
            <h2>Select an Option:</h2>

            <div className="flex flex-col ">
              <div>
                <input type="radio" id="option1" name="option" value="1" />
                <label htmlFor="option1"> $</label>
              </div>
              <div>
                <input type="radio" id="option2" name="option" value="2" />
                <label htmlFor="option2"> $</label>
              </div>
              <div>
                <input type="radio" id="option3" name="option" value="3" />
                <label htmlFor="option3"> $</label>
              </div>

            </div>

            {/* Amount */}
            <div className="mb-4">
              <button
                onClick={handleAmountClicked}
                className="inline-block border-b-2 border-transparent hover:border-black"
              >
                Enter a custom donation amount:
              </button>

              {clicked && (
                <div>
                  <input
                    className="w-52 bg-transparent text-sm border rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-green-500 shadow-sm focus:shadow"
                    type="number"
                    id="donation-amount"
                    placeholder="Donation Amount"
                    min="1"
                    max="300"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Buttons */}
          <div className="space-x-4 text-white">
            <button className="bg-red-500 px-5 py-2 rounded">Cancel</button>
            <button className="bg-green-500 px-5 py-2 rounded">
              Go to Check
            </button>

     
          </div>
        </div>
      </div>
    </>
  );
};

export default Case;
