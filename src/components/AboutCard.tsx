import { SetStateAction } from "react";
import { backerTierList } from "../data/backerTierList";
import { backerTierEnum } from "../enums/backerTierEnum";
import Card from "./Card";

interface AboutCardProps {
  setShowBackThisProjectModal: React.Dispatch<SetStateAction<boolean>>;
  setSelectedTier: React.Dispatch<SetStateAction<backerTierEnum | null>>;
}
export default function AboutCard({
  setShowBackThisProjectModal,
  setSelectedTier,
}: AboutCardProps) {
  return (
    <Card>
      <div className="text-left">
        <h2 className="text-lg font-bold mb-6">About this project</h2>
        <p className="text-sm leading-6 text-darkGray mb-6">
          The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
          that elevates your screen to a more comfortable viewing height.
          Placing your monitor at eye level has the potential to improve your
          posture and make you comfortable while at work, helping stay focused
          on the task at hand.
        </p>
        <p className="text-sm leading-6 text-darkGray mb-8">
          Featuring artisan craftsmanship, the simplicity of design creates
          extra desk space below your computer to allow notepads, pens, and USB
          sticks to be stored under the stand.
        </p>

        <div className="grid gap-6">
          {backerTierList.map((backerTier, idx) => {
            const noStockLeft = backerTier.stockLeft <= 0;

            if (idx === 0) return;
            return (
              <Card
                key={backerTier.title}
                borderColor="border-gray-200"
                mdPx="md:px-8"
                custom={noStockLeft ? "opacity-50" : ""}
              >
                <div className="text-left text-sm md:text-base">
                  <div className="md:flex justify-between items-center mb-6">
                    <h3 className="font-bold mb-1 md:m-0 md:text-lg">
                      {backerTier.title}
                    </h3>
                    <p className="text-moderateCyan font-medium md:text-[0.9375rem]">
                      {backerTier.subtitle}
                    </p>
                  </div>

                  <p className="text-darkGray leading-6 mb-7 md:leading-8">
                    {backerTier.description}
                  </p>

                  <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
                    <div className="flex items-center gap-2">
                      <p className="text-[2rem] font-bold">
                        {backerTier.stockLeft}
                      </p>
                      <p className="text-darkGray">left</p>
                    </div>
                    <button
                      className={noStockLeft ? "disabledBtn" : "btn"}
                      onClick={() => {
                        setSelectedTier(backerTier.enum);
                        setShowBackThisProjectModal(true);
                        window.scrollTo(0, 0);
                      }}
                    >
                      {noStockLeft ? "Out of stock" : "Select Reward"}
                    </button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </Card>
  );
}
