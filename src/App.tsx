import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import {
  AboutCard,
  BackThisProjectModal,
  FundingDetailsCard,
  IntroCard,
  Navbar,
  ThanksModal,
} from "./components";

import heroImgMobile from "./images/image-hero-mobile.jpg";
import heroImgDesktop from "./images/image-hero-desktop.jpg";
import { backerTierEnum } from "./enums/backerTierEnum";

function App() {
  const [showBackThisProjectModal, setShowBackThisProjectModal] =
    useState<boolean>(false);
  const [selectedTier, setSelectedTier] = useState<backerTierEnum | null>(null);
  const [showThanksModal, setShowThanksModal] = useState<boolean>(false);

  return (
    <>
      <main className="relative px-6 z-0">
        <div className="absolute left-0 top-0 -z-50 w-full h-[18.75rem] overflow-hidden md:h-[25rem]">
          <img className="block md:hidden" src={heroImgMobile} alt="" />
          <img className="hidden md:block" src={heroImgDesktop} alt="" />
          <div className="absolute h-full w-full top-0 left-0 gradient-bg"></div>
        </div>

        <Navbar />

        <div className="grid gap-6 max-w-[45.625rem] mx-auto mt-40 pb-16 md:mt-[11.875rem]">
          <IntroCard
            setShowBackThisProjectModal={setShowBackThisProjectModal}
          />
          <FundingDetailsCard />
          <AboutCard
            setShowBackThisProjectModal={setShowBackThisProjectModal}
            setSelectedTier={setSelectedTier}
          />
        </div>

        <AnimatePresence initial={false} exitBeforeEnter={true}>
          {showBackThisProjectModal && (
            <BackThisProjectModal
              showBackThisProjectModal={showBackThisProjectModal}
              setShowBackThisProjectModal={setShowBackThisProjectModal}
              selectedTier={selectedTier}
              setSelectedTier={setSelectedTier}
              setShowThanksModal={setShowThanksModal}
            />
          )}
        </AnimatePresence>

        <AnimatePresence initial={false} exitBeforeEnter={true}>
          {showThanksModal && (
            <ThanksModal
              showThanksModal={showThanksModal}
              setShowThanksModal={setShowThanksModal}
            />
          )}
        </AnimatePresence>
      </main>

      <footer className="py-1 text-xs font-medium text-darkGray w-full text-center">
        Challenge by{" "}
        <a
          className="text-sm text-moderateCyan font-bold"
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          className="text-sm text-moderateCyan font-bold"
          href="https://www.github.com/mgksp"
          target="_blank"
        >
          Prabu
        </a>
        .
      </footer>
    </>
  );
}

export default App;
