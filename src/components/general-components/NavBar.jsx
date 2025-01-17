// import { useState } from "react";
// import { useLocation } from "react-router-dom";
// import DonateButton from "../buttons/DonateButton";

const Header = () => {
  return (
    <>
      <header className="bg-white flex pb-2 pt-4  z-50 w-full justify-around sticky top-0 shadow-sm">
        {/* Logo Section */}
        <div>
          <h1 className="font-serif  font-black text-2xl  ">
            {" "}
            <a href="/home">Glim.</a>
          </h1>
        </div>

        {/* Navigation Section */}
        <nav>
          <div className=" font-semibold "></div>
          <ul className="font-inter text-gray-900 flex space-x-20   ">
            {/* <li>
              <a href="/home">Home</a>
            </li> */}

            <li className="">
              <a href="/allposts">Category</a>
            </li>
            <li>
              <a href="/map">Map</a>
            </li>
            <li>
              <a href="/donation">Donation</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>

            <li>
              <a href="/cards">Cards</a>
            </li>
          </ul>
        </nav>

        {/* Sign In Section */}
        <div>
          <a href="/sign-in" className="">
            Log In <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </header>
    </>
  );

  // const [searchOpen, setSearchOpen] = useState(false);
  // const location = useLocation();

  // const isHomePage = location.pathname === "/home";

  // return (
  //   <div className={`sticky top-0  ${isHomePage ? "bg-red-500" : "bg-white"}`}>
  //     <header className=" px-6 pb-2 pt-3 flex items-center justify-between   px-12 md:px-40">
  //       {/* Left Section */}
  //       <div className="flex items-center">
  //         <h1
  //           className={` text-2xl font-bold ${
  //             isHomePage ? "text-gray-800" : "text-red-600"
  //           }`}
  //         >
  //           <a href="/home"> WR</a>
  //         </h1>
  //       </div>

  //       {/* Right Section */}
  //       <div className="flex items-center space-x-6">
  //         <nav
  //           className={`flex space-x-6 ${
  //             isHomePage ? " text-white" : " text-black"
  //           }`}
  //         >
  //           <a
  //             href="/about"
  //             className="  relative hover:after:absolute hover:after:w-full hover:after:h-[2px] hover:after:bg-black hover:after:bottom-0 hover:after:left-0 hover:after:transition-all"
  //           >
  //             About
  //           </a>
  //           <a
  //             href="/map"
  //             className="  relative hover:after:absolute hover:after:w-full hover:after:h-[2px] hover:after:bg-black hover:after:bottom-0 hover:after:left-0 hover:after:transition-all"
  //           >
  //             Map
  //           </a>
  //           <a
  //             href="/allposts"
  //             className=" relative hover:after:absolute hover:after:w-full hover:after:h-[2px] hover:after:bg-black hover:after:bottom-0 hover:after:left-0 hover:after:transition-all"
  //           >
  //             Posts
  //           </a>

  //           <a
  //             href="/sign-in"
  //             className="relative hover:after:absolute hover:after:w-full hover:after:h-[2px] hover:after:bg-black hover:after:bottom-0 hover:after:left-0 hover:after:transition-all"
  //           >
  //             Sign In
  //           </a>

  //           <a
  //             href="/cards"
  //             className="relative hover:after:absolute hover:after:w-full hover:after:h-[2px] hover:after:bg-black hover:after:bottom-0 hover:after:left-0 hover:after:transition-all"
  //           >
  //             Cards
  //           </a>

  //           {searchOpen && (
  //             <input
  //               type="text"
  //               placeholder="Search..."
  //               className="px-3 py-1 text-black rounded-md focus:outline-none"
  //             />
  //           )}
  //           <button
  //             onClick={() => setSearchOpen(!searchOpen)}
  //             className={` px-3 py-1 rounded-md ${
  //               isHomePage ? "bg-white text-gray-800" : "bg-gray-800 text-white"
  //             }`}
  //           >
  //             {searchOpen ? (
  //               "Close"
  //             ) : (
  //               <img
  //                 src={
  //                   isHomePage ? "./Icons/search.png" : "./Icons/searchw.png"
  //                 }
  //                 alt="Search"
  //                 className="w-4 h-4 "
  //               />
  //             )}
  //           </button>

  //           <DonateButton />
  //         </nav>
  //       </div>
  //     </header>
  //   </div>
  // );
};

export default Header;
