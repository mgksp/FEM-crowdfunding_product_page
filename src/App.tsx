import heroImgMobile from "./images/image-hero-mobile.jpg";
import heroImgDesktop from "./images/image-hero-desktop.jpg";

import logo from "./images/logo.svg";

import iconHamburger from "./images/icon-hamburger.svg";

import logoMastercraft from "./images/logo-mastercraft.svg";
import iconBookmark from "./images/icon-bookmark.svg";

function App() {
  return (
    <main className="relative px-6">
      <div className="absolute left-0 top-0 -z-50 w-full h-[18.75rem] overflow-hidden">
        <img className="block md:hidden" src={heroImgMobile} alt="" />
        <img className="hidden md:block" src={heroImgDesktop} alt="" />
        <div className="absolute h-full w-full top-0 left-0 gradient-bg"></div>
      </div>

      <nav className="flex items-center justify-between py-8">
        <div className="w-32">
          <img className="" src={logo} alt="" />
        </div>

        <div className="md:hidden">
          <button className="" aria-label="nav menu button">
            <img src={iconHamburger} alt="" />
          </button>
        </div>

        <div className="hidden md:flex">
          <a href="/">About</a>
          <a href="/">Discover</a>
          <a href="/">Get Started</a>
        </div>
      </nav>

      <div className="max-w-[45.625rem] mx-auto mt-40">
        <div className="relative px-6 py-10 bg-white rounded-lg text-center shadow-sm md:p-12">
          <div className="absolute top-0 left-0 -translate-y-1/2 w-full flex justify-center">
            <img className="" src={logoMastercraft} alt="" />
          </div>

          <h1 className="text-xl font-bold mb-4 mt-2 md:text-[1.75rem]">
            Mastercraft Bamboo <br className="md:hidden" /> Monitor Riser
          </h1>

          <p className="text-sm leading-6 text-darkGray mb-6 md:text-base md:mb-9">
            A beautifully handcrafted monitor stand to reduce neck and eye
            strain.
          </p>

          <div className="flex justify-between gap-2">
            <button className="bg-moderateCyan text-white font-bold flex-1 rounded-full max-w-[12.75rem] hover:bg-darkCyan transition-colors ease-out duration-150">
              Back this project
            </button>
            <button
              className="rounded-full flex items-center bg-gray-300 text-darkGray"
              aria-label="bookmark"
            >
              <img src={iconBookmark} alt="" />
              <div className="hidden md:block font-bold pl-4 pr-6">
                Bookmark
              </div>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
