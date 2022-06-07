import Card from "./Card";

import logoMastercraft from "../images/logo-mastercraft.svg";
import React, { SetStateAction, useState } from "react";

interface IntroCardProps {
  setShowBackThisProjectModal: React.Dispatch<SetStateAction<boolean>>;
}
export default function IntroCard({
  setShowBackThisProjectModal,
}: IntroCardProps) {
  const [bookmarked, setBookmarked] = useState<boolean>(false);

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
          <button
            className="btn flex-1 max-w-[12.75rem]"
            onClick={() => {
              window.scrollTo(0, 0);
              setShowBackThisProjectModal(true);
            }}
          >
            Back this project
          </button>
          <label
            className={
              bookmarked
                ? "rounded-full flex items-center justify-between bg-gray-200 text-darkCyan cursor-pointer"
                : "rounded-full flex items-center justify-between bg-gray-300 text-darkGray cursor-pointer hover-svg-bookmark"
            }
            aria-label="bookmark"
            htmlFor="bookmark"
          >
            <input
              type="checkbox"
              className="absolute invisible"
              checked={bookmarked}
              onChange={() => setBookmarked((prev) => !prev)}
              id="bookmark"
            />
            <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fillRule="evenodd">
                <circle
                  fill={bookmarked ? "hsl(176, 72%, 28%)" : "#2F2F2F"}
                  cx="28"
                  cy="28"
                  r="28"
                />
                <path fill="#B1B1B1" d="M23 19v18l5-5.058L33 37V19z" />
              </g>
            </svg>
            <div className="hidden md:block font-bold pl-4 pr-6">
              {bookmarked ? "Bookmarked" : "Bookmark"}
            </div>
          </label>
        </div>
      </>
    </Card>
  );
}
