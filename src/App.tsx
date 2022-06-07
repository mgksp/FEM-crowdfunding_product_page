import { useState } from "react";

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
    <main className="relative px-6 z-0">
      <div className="absolute left-0 top-0 -z-50 w-full h-[18.75rem] overflow-hidden md:h-[25rem]">
        <img className="block md:hidden" src={heroImgMobile} alt="" />
        <img className="hidden md:block" src={heroImgDesktop} alt="" />
        <div className="absolute h-full w-full top-0 left-0 gradient-bg"></div>
      </div>

      <Navbar />

      <div className="grid gap-6 max-w-[45.625rem] mx-auto mt-40 pb-16 md:mt-[11.875rem]">
        <IntroCard setShowBackThisProjectModal={setShowBackThisProjectModal} />
        <FundingDetailsCard />
        <AboutCard
          setShowBackThisProjectModal={setShowBackThisProjectModal}
          setSelectedTier={setSelectedTier}
        />
      </div>

      {showBackThisProjectModal && (
        <BackThisProjectModal
          showBackThisProjectModal={showBackThisProjectModal}
          setShowBackThisProjectModal={setShowBackThisProjectModal}
          selectedTier={selectedTier}
          setSelectedTier={setSelectedTier}
          setShowThanksModal={setShowThanksModal}
        />
      )}

      {showThanksModal && (
        <ThanksModal
          showThanksModal={showThanksModal}
          setShowThanksModal={setShowThanksModal}
        />
      )}
    </main>
  );
}

export default App;
