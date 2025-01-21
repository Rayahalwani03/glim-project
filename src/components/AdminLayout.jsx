import { Outlet } from "react-router-dom";
import PortalNavBar from './general-components/PortalNavBar'
import Footer from "./general-components/Footer"; // Adjusted the path
import SideBar from "./general-components/SideBar";

const AdminLayout = () => {
  return (
   
    <div className="flex flex-col min-h-screen">
    <PortalNavBar /> {/* Navbar or Header */}
    <div className="flex h-full">
      <SideBar />
      <main className="flex-grow pb-20">
        <Outlet /> {/* This will render the page content */}
      </main>
    </div>
    <Footer className="mt-auto"/> {/* Footer will always be at the bottom */}
  </div>

  )
}

export default AdminLayout
