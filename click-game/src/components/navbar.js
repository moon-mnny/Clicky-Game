import React from "react";
function Navbar(props) {
  return (
    <div className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">Clicky Game</div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <div className="navbar-item">Click an image to start</div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">Score : {props.score}</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
