import React from 'react';
import globalStyles from "../App.css";
import localStyles from "./Navigation.module.css"; // Removed "components/"

const Navigation = () => {
  return (
    <nav className={localStyles.navigation}>
      <div className={localStyles.logo}>
        <img src="/Images/biaLogo.png" alt="logo" />
      </div>
      <ul>
        <li>
          <a href="#">Bia <b>Sleep</b></a>
        </li>
        <li>
          <a href="#">Bia <b>Experience</b></a>
        </li>
        <li>
          <a href="#">Bia <b>Lifestyle</b></a>
        </li>
      </ul>
      <button>
        <b>ORDER NOW</b>
      </button>
    </nav>
  );
}

export default Navigation;
