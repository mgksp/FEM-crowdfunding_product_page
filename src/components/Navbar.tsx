import { SetStateAction, useState } from "react";

import logo from "../images/logo.svg";
import iconHamburger from "../images/icon-hamburger.svg";
import iconCloseMenu from "../images/icon-close-menu.svg";

export default function Navbar() {
  const [showMobNav, setShowMobNav] = useState(false);

  return (
    <nav className="flex items-center justify-between py-8 max-w-[69.25rem] mx-auto md:py-12">
      <div className="w-32 h-6">
        <img className="" src={logo} alt="" />
      </div>

      <div className="hidden text-white text-sm font-medium md:flex gap-8">
        <a href="/">About</a>
        <a href="/">Discover</a>
        <a href="/">Get Started</a>
      </div>

      <div className="md:hidden">
        {!showMobNav && (
          <button
            className="h-4 w-4"
            aria-label="nav menu button"
            onClick={() => setShowMobNav(true)}
          >
            <img src={iconHamburger} alt="" />
          </button>
        )}

        {showMobNav && <MobNav setShowMobNav={setShowMobNav} />}
      </div>
    </nav>
  );
}

interface MobNavProps {
  setShowMobNav: React.Dispatch<SetStateAction<boolean>>;
}
const MobNav = ({ setShowMobNav }: MobNavProps) => {
  return (
    <div className="min-h-screen w-full absolute top-0 left-0 z-50 gradient-bg-mobnav px-6">
      <div className="flex items-center justify-between py-8">
        <div className="w-32 h-6">
          <img className="" src={logo} alt="" />
        </div>
        <button
          className="h-4 w-4"
          aria-label="nav menu button"
          onClick={() => setShowMobNav(false)}
        >
          <img src={iconCloseMenu} alt="" />
        </button>
      </div>

      <div className="bg-white rounded-lg text-lg font-medium">
        <div className="p-6">About</div>
        <hr className="border-0 border-b-1 border-gray-100" />
        <div className="p-6">Discover</div>
        <hr className="border-0 border-b-1 border-gray-100" />
        <div className="p-6">Get Started</div>
      </div>
    </div>
  );
};
