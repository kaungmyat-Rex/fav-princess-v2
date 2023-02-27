import React from "react";
const Nav = ({ setaddmodel }) => {
  return (
    <div className="nav-section">
      <div className="nav-border">
        <div className="nav-main">
          <h3>Kaung's Fav Princess</h3>
          <p onClick={() => setaddmodel(true)}>ollo</p>
        </div>
      </div>
    </div>
  );
};

export default Nav;
