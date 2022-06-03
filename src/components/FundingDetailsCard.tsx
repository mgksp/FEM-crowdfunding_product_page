import { motion } from "framer-motion";
import Card from "./Card";

export default function FundingDetailsCard() {
  return (
    <Card>
      <>
        <div className="md:flex gap-12">
          <div className="flex-1 md:text-left md:border-r-1 border-gray-200">
            <h1 className="text-[2rem] font-bold">$89,914</h1>
            <p className="text-sm text-darkGray">of $100,000 backed</p>
          </div>

          <hr className="border-0 border-b-1 border-gray-200 w-1/3 mx-auto my-6 md:hidden" />

          <div className="flex-1 md:text-left md:border-r-1 border-gray-200">
            <h1 className="text-[2rem] font-bold">5,007</h1>
            <p className="text-sm text-darkGray">total backers</p>
          </div>

          <hr className="border-0 border-b-1 border-gray-200 w-1/3 mx-auto my-6 md:hidden" />

          <div className="flex-1 md:text-left">
            <h1 className="text-[2rem] font-bold">56</h1>
            <p className="text-sm text-darkGray">days left</p>
          </div>
        </div>

        <div className="relative bg-gray-100 h-3 rounded-full mt-7 md:mt-9">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${(89914 / 100000) * 100}%` }}
            transition={{
              type: "spring",
              stiffness: 70,
            }}
            className="absolute top-0 left-0 h-full bg-moderateCyan rounded-full"
          ></motion.div>
        </div>
      </>
    </Card>
  );
}
