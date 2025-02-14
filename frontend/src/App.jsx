import { useEffect, useState } from "react";
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
import { useAuth } from "./context/AuthContext";
import Dashboard from "./Pages/AdminDashboard/Dashboard";

function App() {
  const { user } = useAuth();

  const isAdmin = user?.isAdmin;
  console.log(user);
  const token = localStorage.getItem("authToken");

  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route
            path="/signup"
            element={token ? <Navigate to="/" replace /> : <Signup />}
          />
          <Route
            path="/login"
            element={token ? <Navigate to="/" replace /> : <Login />}
          />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route
            path="/dashboard"
            element={isAdmin ? <Dashboard /> : <Navigate to="/" replace />}
          /> */}
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
