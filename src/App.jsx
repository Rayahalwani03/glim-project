import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import AdminLayout from "./components/AdminLayout";
import Layout from "./components/Layout";

import AboutUs from "./pages/AboutUs";
import AdminHome from "./pages/admin-portal/AdminHome";
import AllPosts from "./pages/AllPosts";
import Cards from "./pages/Cards";
import DonationCase from "./pages/DonationCase";
import Donations from "./pages/Donations";
import Home from "./pages/Home";
import Map from "./pages/Map";
import Post from "./pages/Post";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

import ScrollToTop from "./components/general-components/ScrollToTop";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Router>
      <ScrollToTop /> {/* Scroll to top on route change */}
      <Routes>
        {/* Public Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> {/* Default route ("/") */}
          <Route path="post" element={<Post />} /> {/* Dynamic post route */}
          <Route path="map" element={<Map />} />
          <Route path="category" element={<AllPosts />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="donation" element={<Donations />} />
          <Route path="cards" element={<Cards />} />
          <Route path="donationcase" element={<DonationCase />} />
        </Route>

        <Route path="/admin-portal" element={<AdminLayout />}>
          <Route index element={<AdminHome />} />
        </Route>

        {/* Catch-all route */}
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />

        {/* Catch-all route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
