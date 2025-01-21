import React from "react";

const PortalNavBar = () => {
  return (
    <>
      <header className="bg-white flex pb-2 pt-4  z-50 w-full justify-around sticky top-0 shadow-sm">
        {/* Logo Section */}
        <div className="flex items-center">
        <a href="/home">
          <h1 className="font-serif font-black text-2xl flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mr-2 "
               // Adjust size and margin for spacing
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
              />
            </svg>
           
            Glim.
          </h1>
          </a>
        </div>

        {/* search Section */}
        <div className="relative max-w-80 flex-grow">
          <img
            src="/Icons/search.png"
            alt="Search Icon"
            className="absolute w-5 h-5 top-2.5 left-2.5 text-slate-600"
          />
          <input
            type="text"
            className="pl-10 py-2 border bg-lightGray w-full rounded-md placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300"
            placeholder="Search for anything..."
          />
        </div>

        {/* Sign In Section */}
        <div>
          <a href="/sign-in" className="">
            Log In <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </header>
    </>
  );
};

export default PortalNavBar;
