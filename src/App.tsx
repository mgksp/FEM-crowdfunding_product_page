import { FundingDetailsCard, IntroCard } from "./components";

import heroImgMobile from "./images/image-hero-mobile.jpg";
import heroImgDesktop from "./images/image-hero-desktop.jpg";

import logo from "./images/logo.svg";

import iconHamburger from "./images/icon-hamburger.svg";

function App() {
  return (
    <main className="relative px-6">
      <div className="absolute left-0 top-0 -z-50 w-full h-[18.75rem] overflow-hidden md:h-[25rem]">
        <img className="block md:hidden" src={heroImgMobile} alt="" />
        <img className="hidden md:block" src={heroImgDesktop} alt="" />
        <div className="absolute h-full w-full top-0 left-0 gradient-bg"></div>
      </div>

      <nav className="flex items-center justify-between py-8 max-w-[69.25rem] mx-auto md:py-12">
        <div className="w-32">
          <img className="" src={logo} alt="" />
        </div>

        <div className="md:hidden">
          <button className="" aria-label="nav menu button">
            <img src={iconHamburger} alt="" />
          </button>
        </div>

        <div className="hidden text-white text-sm font-medium md:flex gap-8">
          <a href="/">About</a>
          <a href="/">Discover</a>
          <a href="/">Get Started</a>
        </div>
      </nav>

      <div className="grid gap-6 max-w-[45.625rem] mx-auto mt-40 mb-6 md:mt-[11.875rem]">
        <IntroCard />
        <FundingDetailsCard />
      </div>
    </main>
  );
}

export default App;
