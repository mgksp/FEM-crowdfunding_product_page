import { SetStateAction, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import Card from "./Card";

import { backerTierList } from "../data/backerTierList";
import iconCloseModal from "../images/icon-close-modal.svg";
import { backerTierEnum } from "../enums/backerTierEnum";

interface BackThisProjectModalProps {
  setShowBackThisProjectModal: React.Dispatch<SetStateAction<boolean>>;
  showBackThisProjectModal: boolean;
}
export default function BackThisProjectModal({
  setShowBackThisProjectModal,
  showBackThisProjectModal,
}: BackThisProjectModalProps) {
  const [selectedTier, setSelectedTier] = useState<backerTierEnum | null>(null);

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
    <div className="absolute top-0 left-0 z-50 w-full px-6 py-32 bg-blackOp25 text-sm h-full md:text-base">
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
                    key={backerTier.enum}
                    borderColor={
                      backerTier.enum === selectedTier
                        ? "border-moderateCyan"
                        : "border-gray-200"
                    }
                    textAlign="text-left"
                    py="py-8"
                    mdPx="md:px-6"
                    mdPy="md:py-5"
                    custom={noStockLeft ? "opacity-50" : ""}
                  >
                    <>
                      <div className="flex items-center gap-4 mb-8">
                        <label
                          className="relative h-6 w-6 rounded-full border-1 border-gray-200 cursor-pointer"
                          htmlFor={backerTier.enum}
                        >
                          {!noStockLeft && (
                            <input
                              className="invisible"
                              value={backerTier.enum}
                              checked={selectedTier === backerTier.enum}
                              onChange={() => setSelectedTier(backerTier.enum)}
                              type="checkbox"
                              id={backerTier.enum}
                            />
                          )}
                          <div
                            className={
                              backerTier.enum === selectedTier
                                ? "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-3/4 w-3/4 rounded-full bg-moderateCyan"
                                : ""
                            }
                          ></div>
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

                      {backerTier.enum === selectedTier && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: "fit-content" }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="flex flex-col items-center gap-5 pt-6 mt-6 border-t-2 border-gray-200 md:flex-row md:justify-between">
                            <div className="text-darkGray">
                              Enter your pledge
                            </div>
                            <div className="grid grid-cols-2 gap-4 max-w-[15rem]">
                              <div className="relative">
                                <div className="absolute top-1/2 -translate-y-1/2 left-5 text-darkGray">
                                  $
                                </div>
                                <input
                                  className="rounded-full h-full w-full border-1 border-gray-200 pl-10 pr-3 font-bold"
                                  type="number"
                                  defaultValue={backerTier.minPledgeAmt}
                                />
                              </div>
                              <button className="btn px-0 md:px-5">
                                Continue
                              </button>
                            </div>
                          </div>
                        </motion.div>
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
