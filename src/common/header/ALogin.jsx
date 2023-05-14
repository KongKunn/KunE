import React from 'react';
import './ALogin.css'

function Login() {
  return (
  <div>
    <form className="form">
  <div className="header">Sign In</div>
  <div className="inputs">
    <input placeholder="Email" className="input" type="text" />
    <input placeholder="Password" className="input" type="password" />
    <div className="checkbox-container">
      <label className="checkbox">
        <input type="checkbox" id="checkbox" />
      </label>
      <label htmlFor="checkbox" className="checkbox-text">
        Remember me
      </label>
    </div>
    <button className="sigin-btn">Submit</button>
    <a className="forget" href="#">
      Forget password ?
    </a>
    <p className="signup-link">
      Don't have an account? <a href="#">Sign up</a>
    </p>
  </div>
</form>

  </div>
  );
}

export default Login;
