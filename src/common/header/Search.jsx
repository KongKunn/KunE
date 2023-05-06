import React, { useState } from "react";
import logo from "../../components/assets/images/logo.png";
import { Link, useHistory } from "react-router-dom";
import Login from "../header/ALogin"; 
// import { red } from "@mui/material/colors";
import Cart from "../Cart/Cart";



const Search = ({ CartItem }) => {
  const history = useHistory();
  const [showLogin, setShowLogin] = useState(false);
  const [hideLogin, setHideLogin] = useState(false);

  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search");
    search.classList.toggle("active", window.scrollY > 100);
  });

  const handleLoginClick = () => {
    setHideLogin(false);
    setShowLogin(true);
    history.push("/login");
  };

  const handleHomeClick = () => {
    setHideLogin(true);
    setShowLogin(false);
  };

  return (
    <>
      <section className="search">
        <div className="container c_flex">
          <div className="logo width ">
            <Link to="/" onClick={handleHomeClick}>
              <img src={logo} alt="/" />
            </Link>
          </div>

          <div className="search-box f_flex">
            <i className="fa fa-search"></i>
            <input type="text" placeholder="Search and hit enter..." />
            <button>Search</button>
          </div>

          <div className="icon f_flex width">
          <i onClick={handleLoginClick} style={{display:"flex",alignItems: "center",fontSize:"100%", fontWeight:"bold",fontStyle: 'normal',cursor:"pointer" }}>
  Login
</i>

            <div className="cart">
              <Link to="/cart">
                <i className="fa fa-shopping-bag icon-circle"></i>
                <span>{CartItem.length === 0 ? "" : CartItem.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {!hideLogin && showLogin && <Login />}
      
    </>
  );
};
<Cart/>
export default Search;
