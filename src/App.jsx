import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import AboutUs from "./pages/AboutUs";
import AllPosts from "./pages/AllPosts";
import Donations from "./pages/Donations";
import Home from "./pages/Home";
import Map from "./pages/Map";
import Post from "./pages/Post";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Cards from './pages/Cards';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/post" element={<Post />} />
          <Route path="/map" element={<Map />} />
          <Route path="/allposts" element={<AllPosts />} />
          <Route path="/map" element={<Map />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/donation" element={<Donations />} />
          <Route path="/cards" element={<Cards />} />
         
        </Route>
   
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </Router>
  );
};

export default App;
