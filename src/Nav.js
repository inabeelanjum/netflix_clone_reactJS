import React, { useEffect, useState } from "react";

import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
        className="nav_logo"
        alt="Netflix logo"
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        className="nav_avatar"
        alt="Profile avatar"
      />
    </div>
  );
}

export default Nav;
