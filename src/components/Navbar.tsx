import { useState } from "react";

import logo from "../images/logo.svg";
import iconHamburger from "../images/icon-hamburger.svg";

export default function Navbar() {
  const [showMobNav, setShowMobNav] = useState(false);

  return (
    <nav className="flex items-center justify-between py-8 max-w-[69.25rem] mx-auto md:py-12">
      <div className="w-32">
        <img className="" src={logo} alt="" />
      </div>

      <div className="hidden text-white text-sm font-medium md:flex gap-8">
        <a href="/">About</a>
        <a href="/">Discover</a>
        <a href="/">Get Started</a>
      </div>

      <div className="md:hidden">
        <button
          aria-label="nav menu button"
          onClick={() => setShowMobNav(true)}
        >
          <img src={iconHamburger} alt="" />
        </button>
      </div>
    </nav>
  );
}
