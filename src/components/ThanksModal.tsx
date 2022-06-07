import Card from "./Card";

import iconCheck from "../images/icon-check.svg";
import { SetStateAction, useEffect, useRef } from "react";

interface ThanksModalProps {
  showThanksModal: boolean;
  setShowThanksModal: React.Dispatch<SetStateAction<boolean>>;
}
export default function ThanksModal({
  showThanksModal,
  setShowThanksModal,
}: ThanksModalProps) {
  const node = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function closeNavMenu(evt: MouseEvent) {
      if (
        showThanksModal &&
        node.current &&
        !node.current.contains(evt.target as Node)
      ) {
        setShowThanksModal!(false);
      }
    }

    document.addEventListener("mousedown", closeNavMenu);

    return () => {
      document.removeEventListener("mousedown", closeNavMenu);
    };
  }, [showThanksModal]);

  return (
    <div className="absolute top-0 left-0 w-full h-full bg-blackOp25 px-6">
      <div className="h-screen grid items-center text-sm md:text-base max-w-[33.75rem] mx-auto">
        <div ref={node}>
          <Card mdTextAlign="text-center">
            <>
              <img
                className="mx-auto mb-6 md:w-24 md:mb-12"
                src={iconCheck}
                alt=""
              />
              <h2 className="font-bold text-lg mb-6 md:text-2xl">
                Thanks for the support!
              </h2>
              <p className="text-darkGray leading-6 mb-7">
                Your pledge brings us one step closer to sharing Mastercraft
                Bamboo Monitor Riser worldwide. You will get an email once our
                campaign is completed.
              </p>
              <button className="btn" onClick={() => setShowThanksModal(false)}>
                Got it!
              </button>
            </>
          </Card>
        </div>
      </div>
    </div>
  );
}
