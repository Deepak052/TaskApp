import React from "react";
import {
  FaSearch,
  FaHeart,
  FaShoppingBag,
  FaUser,
  FaGlobe,
} from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="w-full h-[10%]">
      <nav className="navbar navbar-expand-lg navbar-light bg-light flex justify-between">
        <div id="logo">
          <a className="navbar-brand" href="#">
            Logo
          </a>
        </div>
        <div id="brandName">
          <a className="navbar-brand font-extrabold text-xl" href="#">
            Logo
          </a>
        </div>
        <div id="navlinks">
          <ul className="navbar-nav ml-auto flex gap-5">
            <li className="nav-item">
              <a className="nav-link flex items-center gap-1" href="#">
                <FaSearch /> <span>Search</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link flex items-center gap-1" href="#">
                <FaHeart /> <span>Wishlist</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link flex items-center gap-1" href="#">
                <FaShoppingBag /> <span>Bag</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link flex items-center gap-1" href="#">
                <FaUser /> <span>User</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link flex items-center gap-1" href="#">
                <FaGlobe /> <span>Language</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div
        id="nav2Links"
        className="navbar navbar-expand-lg navbar-light bg-light"
      >
        <ul className="navbar-nav ml-auto flex gap-5 mt-5 justify-center">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Shop
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Skills
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Stories
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
