import React from "react";
import Clock from "react-live-clock";

const Navbar = () => {
  let todayDate = new Date().toDateString();

  return (
    <div class="navbar">
      <div class="scroll-right">
        <h2>
          {todayDate} | <Clock format={"HH:mm:ss"} ticking={true} />
        </h2>
      </div>
    </div>
  );
};

export default Navbar;
