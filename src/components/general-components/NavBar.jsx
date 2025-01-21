import { Link } from "react-router-dom";


const NavBar = () => {
  return (
    <>
      <header className="bg-white flex pb-2 pt-4 z-50 w-full justify-around sticky top-0 shadow-sm">
        {/* Logo Section */}
        <div>
          <h1 className="font-serif font-black text-2xl">
            <Link to="/home">Glim.</Link> {/* Replaced <a> with <Link> */}
          </h1>
        </div>

        {/* Navigation Section */}
        <nav>
          <div className="font-semibold"></div>
          <ul className="font-inter text-gray-900 flex space-x-20">
            <li>
              <Link to="/home">Home</Link> {/* Replaced <a> with <Link> */}
            </li>
            <li>
              <Link to="/allposts">Category</Link>{" "}
              {/* Replaced <a> with <Link> */}
            </li>
            <li>
              <Link to="/map">Map</Link> {/* Replaced <a> with <Link> */}
            </li>
            <li>
              <Link to="/donation">Donation</Link>{" "}
              {/* Replaced <a> with <Link> */}
            </li>
            <li>
              <Link to="/about">About</Link> {/* Replaced <a> with <Link> */}
            </li>
            <li>
              <Link to="/cards">Cards</Link> {/* Replaced <a> with <Link> */}
            </li>
          </ul>
        </nav>

        {/* Sign In Section */}
        <div>
          <Link to="/sign-in" className="">
            Log In <span aria-hidden="true">&rarr;</span>{" "}
            {/* Replaced <a> with <Link> */}
          </Link>
        </div>
      </header>
    </>
  );
};

export default NavBar;
