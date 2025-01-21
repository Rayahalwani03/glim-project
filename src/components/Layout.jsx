import { Outlet } from "react-router-dom";
import Footer from "./general-components/Footer"; // Adjusted the path
import NavBar from "./general-components/NavBar";

const Layout = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <NavBar /> {/* Navbar or Header */}
        <main className="flex-grow pb-20 ">
          <Outlet /> {/* This will render the page content */}
        </main>
        <Footer /> {/* Footer will always be at the bottom */}
      </div>
    </>
  );
};

export default Layout;
