import React from "react";

const Navbar = () => {
  let todayDate = new Date().toDateString();

  return (
    <div class="navbar">
      <div class="scroll-right">
        <h2>{todayDate}</h2>
      </div>
    </div>
  );
};

export default Navbar;
