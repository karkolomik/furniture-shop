import React from "react";

export default function Header() {
  return (
    <header>
      <div>
        <span className="logo">Furnish Me</span>
        <ul className="nav">
          <li>About us</li>
          <li>Contancs</li>
          <li>Personal cabinet</li>
        </ul>
      </div>
      <div className="presentation"></div>
    </header>
  );
}
