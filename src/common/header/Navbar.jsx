import React, { useState } from "react";
import "../header/Navbar.css";
import Categories from "../../components/MainPage/Categories";
const Navbar = () => {
  // Toogle Menu
  const [isCategoryShown, setIsCategoryShown] = useState(false);
  const handleCategoryClick = () => {
    setIsCategoryShown(!isCategoryShown);
  };

  return (
    <>
      <header className="header-login">
        <div className="container d_flex">
          <div className="catgrories d_flex">
            <span class="fa-solid fa-border-all"></span>
            <h4 onClick={handleCategoryClick}>
              Categories <i className={`fa ${isCategoryShown ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
            </h4>
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
