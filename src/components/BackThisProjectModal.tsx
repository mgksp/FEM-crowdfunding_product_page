import { SetStateAction, useEffect, useRef } from "react";

import Card from "./Card";

import { backerTierList } from "../data/backerTierList";
import iconCloseModal from "../images/icon-close-modal.svg";

interface BackThisProjectModalProps {
  setShowBackThisProjectModal: React.Dispatch<SetStateAction<boolean>>;
  showBackThisProjectModal: boolean;
}
export default function BackThisProjectModal({
  setShowBackThisProjectModal,
  showBackThisProjectModal,
}: BackThisProjectModalProps) {
  const node = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function closeNavMenu(evt: MouseEvent) {
      if (
        showBackThisProjectModal &&
        node.current &&
        !node.current.contains(evt.target as Node)
      ) {
        setShowBackThisProjectModal!(false);
      }
    }

    document.addEventListener("mousedown", closeNavMenu);

    return () => {
      document.removeEventListener("mousedown", closeNavMenu);
    };
  }, [showBackThisProjectModal]);

  return (
    <div className="absolute top-0 left-0 z-50 w-full px-6 py-32 bg-blackOp25 text-sm h-full">
      <div ref={node} className="max-w-[45.625rem] mx-auto">
        <Card textAlign="text-left">
          <>
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-bold text-lg">Back this project</h2>
              <button
                className=""
                aria-label="close button"
                onClick={() => setShowBackThisProjectModal(false)}
              >
                <img src={iconCloseModal} alt="" />
              </button>
            </div>

            <p className="text-darkGray leading-6 mb-6">
              Want to support us in bringing Mastercraft Bamboo Monitor Riser
              out in the world?
            </p>

            <div className="grid gap-6">
              {backerTierList.map((backerTier) => {
                const noStockLeft = backerTier.stockLeft === 0;

                return (
                  <Card
                    borderColor="border-gray-100"
                    textAlign="text-left"
                    py="py-8"
                    custom={noStockLeft ? "opacity-50" : ""}
                  >
                    <>
                      <div className="flex items-center gap-4 mb-8">
                        <label
                          className="h-6 w-6 rounded-full border-1 border-gray-200"
                          htmlFor="no-reward"
                        >
                          <input
                            className="invisible"
                            type="radio"
                            id="no-reward"
                          />
                        </label>

                        <div className="">
                          <h3 className="font-bold">{backerTier.title}</h3>
                          <p className="font-medium text-moderateCyan">
                            {backerTier.subtitle}
                          </p>
                        </div>
                      </div>

                      <p
                        className={
                          backerTier.stockLeft < 0
                            ? "text-darkGray leading-6"
                            : "text-darkGray leading-6 mb-6"
                        }
                      >
                        {backerTier.description}
                      </p>

                      {!(backerTier.stockLeft < 0) && (
                        <p className="text-[0.9375rem] text-darkGray">
                          <span className="text-lg font-bold text-black">
                            {backerTier.stockLeft}
                          </span>{" "}
                          left
                        </p>
                      )}
                    </>
                  </Card>
                );
              })}
            </div>
          </>
        </Card>
      </div>
    </div>
  );
}
