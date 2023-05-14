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


          <div class="input-container">
            <input required="" placeholder="Search..." type="email"></input>
            <button class="invite-btn" type="button">
              <i class="fa fa-search"></i>
            </button> 
          </div>

          <div className="icon f_flex width">
            <button>
            <i className="login" onClick={handleLoginClick}>
              Login
            </i>
            </button>
          

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
