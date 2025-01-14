import { Outlet } from "react-router-dom";
import Footer from "./general-components/Footer"; // Adjusted the path
import Header from "./general-components/NavBar";

const Layout = () => {
  return (
    <div>
      {/* You can place your header or navbar here if needed */}
      <Header />
      <main>
        <Outlet /> {/* This will render the page content */}
      </main>
      <Footer /> {/* Footer will be displayed on all pages */}
    </div>
  );
};

export default Layout;
