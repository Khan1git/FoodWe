import { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/HeroSection/Hero";
import About from "./Pages/AboutPage/About";
import Footer from "./components/Footer/Footer";
import Shop from "./Pages/ShopPage/Shop";
import Signup from "./Pages/SingupPage/Signup";
import Login from "./Pages/LoginPage/Login";

function App() {
  const token = localStorage.getItem("authToken");
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/signup" element={token ? <Navigate to="/" replace /> : <Signup />}/>
          <Route path="/login" element={token ? <Navigate to="/" replace /> : <Login />}/>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
