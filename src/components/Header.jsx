// import "./Header.css";
// import { FaBell, FaCalendarAlt, FaChevronDown } from "react-icons/fa";

// function Header() {
//   return (
//     <header className="header">

//       <div className="header-left">
//         <h1>
//           Good Morning, <span>Mayank!</span> 👋
//         </h1>

//         <p>Have a productive day ahead.</p>
//       </div>

//       <div className="header-right">

//         <div className="date-box">
//           <FaCalendarAlt />
//           <span>Saturday, 01 August 2026</span>
//         </div>

//         <div className="notification">
//           <FaBell />
//           <span className="badge">3</span>
//         </div>

//         <div className="profile-box">

//           <img
//             src="https://i.pravatar.cc/80?img=12"
//             alt="Mayank"
//           />

//           <FaChevronDown className="arrow"/>

//         </div>

//       </div>

//     </header>
//   );
// }

// export default Header;

import React from "react";
import "./Header.css";

import {
  FaBell,
  FaChevronDown,
  FaCalendarAlt,
} from "react-icons/fa";

function Header() {
  return (
    <header className="header">

      <div className="header-left">
        <h1>
          Dashboard <span>Overview</span>
        </h1>

        <p>Welcome back! Here's what's happening today.</p>
      </div>

      <div className="header-right">

        <div className="date-box">
          <FaCalendarAlt />
          <span>Saturday, 01 August 2026</span>
        </div>

        <div className="notification">
          <FaBell />
          <span className="badge">3</span>
        </div>

        <div className="profile-box">

          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="profile"
          />

          <div>

            <h4>Mayank Panse</h4>

            <p>Software Developer</p>

          </div>

          <FaChevronDown className="arrow" />

        </div>

      </div>

    </header>
  );
}

export default Header;