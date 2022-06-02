import Card from "./Card";

import logoMastercraft from "../images/logo-mastercraft.svg";
import iconBookmark from "../images/icon-bookmark.svg";

export default function IntroCard() {
  return (
    <Card>
      <>
        <div className="absolute top-0 left-0 -translate-y-1/2 w-full flex justify-center">
          <img className="" src={logoMastercraft} alt="" />
        </div>

        <h1 className="text-xl font-bold mb-4 mt-2 md:text-[1.75rem]">
          Mastercraft Bamboo <br className="md:hidden" /> Monitor Riser
        </h1>

        <p className="text-sm leading-6 text-darkGray mb-6 md:text-base md:mb-9">
          A beautifully handcrafted monitor stand to reduce neck and eye strain.
        </p>

        <div className="flex justify-between gap-2">
          <button className="btn flex-1 max-w-[12.75rem]">
            Back this project
          </button>
          <button
            className="rounded-full flex items-center bg-gray-300 text-darkGray"
            aria-label="bookmark"
          >
            <img src={iconBookmark} alt="" />
            <div className="hidden md:block font-bold pl-4 pr-6">Bookmark</div>
          </button>
        </div>
      </>
    </Card>
  );
}
