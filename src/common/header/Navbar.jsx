import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../header/Navbar.css";
import Categories from "../../components/MainPage/Categories";
const Navbar = () => {
  // Toogle Menu
  const [MobileMenu, setMobileMenu] = useState(false);
  const [isCategoryShown, setIsCategoryShown] = useState(false);
  const handleCategoryClick = () => {
    setIsCategoryShown(!isCategoryShown);
  };

  return (
    <>
      <header className="header">
        <div className="container d_flex">
          <div className="catgrories d_flex">
            <span class="fa-solid fa-border-all"></span>
            <h4 onClick={handleCategoryClick}>
              Categories <i className={`fa ${isCategoryShown ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
            </h4>
          </div>
          <div className="navlink">
            <ul
              className={
                MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"
              }
              onClick={() => setMobileMenu(false)}
            >
              <li>
                <Link to="/">home</Link>
              </li>
              <li>
                <Link to="/pages">pages</Link>
              </li>
              <li>
                <Link to="/user">user account</Link>
              </li>
              <li>
                <Link to="/vendor"></Link>
              </li>
              <li>
                <Link to="/track">track my order</Link>
              </li>
              <li>
                <Link to="/contact">contact</Link>
              </li>
            </ul>

            <button
              className="toggle"
              onClick={() => setMobileMenu(!MobileMenu)}
            >
              {MobileMenu ? (
                <i className="fas fa-times close home-btn"></i>
              ) : (
                <i className="fas fa-bars open"></i>
              )}
            </button>
          </div>
        </div>
      </header>
      <div>
        {isCategoryShown ? <Categories  /> : null}

      </div>
    </>
  );
};


export default Navbar;
