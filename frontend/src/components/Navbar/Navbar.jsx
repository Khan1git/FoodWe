import React from "react";
import "./navbar.css";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { Link, Links, useNavigate } from "react-router-dom";

const Navbar = () => {
  const token = localStorage.getItem("authToken");
  const navigate = useNavigate(); // ✅ Fixed spelling

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login"); // ✅ Fixed spelling
  };

  return (
    <>
      <div className="nav_top">
        <h2 className="nav_heading">Welcome MR Admin</h2>
        <div className="sub_menus">
          <Link to={""} className="link">
            <FaShoppingCart size={25} />
          </Link>
          <Link to={""} className="link">
            <IoIosSearch size={25} />
          </Link>
          <Link to={""} className="link">
            <CgProfile size={25} />
          </Link>
        </div>
      </div>
      <header>
        <div>
          <h3>Navbar</h3>
        </div>
        <ul>
          <Link to={"/"} className="link">
            <li>Home</li>
          </Link>
          <li>
            <Link to={"/shop"} className="link">
              Shop
            </Link>
          </li>
          <li>
            <Link to={"/about"} className="link">
              About
            </Link>
          </li>
          <button onClick={token ? handleLogout : () => navigate("/login")}>
            {token ? "Logout" : "Login"}
          </button>
        </ul>
      </header>
    </>
  );
};

export default Navbar;
