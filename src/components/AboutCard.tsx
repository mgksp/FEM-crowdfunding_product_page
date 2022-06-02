import Card from "./Card";

export default function AboutCard() {
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
          <Card borderColor="border-gray-200" mdPx="md:px-8">
            <div className="text-left text-sm md:text-base">
              <div className="md:flex justify-between items-center mb-6">
                <h3 className="font-bold mb-1 md:m-0 md:text-lg">
                  Bamboo Stand
                </h3>
                <p className="text-moderateCyan font-medium md:text-[0.9375rem]">
                  Pledge $25 or more
                </p>
              </div>

              <p className="text-darkGray leading-6 mb-7 md:leading-8">
                You get an ergonomic stand made of natural bamboo. You&apos;ve
                helped us launch our promotional campaign, and you&apos;ll be
                added to a special Backer member list.
              </p>

              <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-2">
                  <p className="text-[2rem] font-bold">101</p>
                  <p className="text-darkGray">left</p>
                </div>
                <button className="btn">Select Reward</button>
              </div>
            </div>
          </Card>

          <Card borderColor="border-gray-200" mdPx="md:px-8">
            <div className="text-left text-sm md:text-base">
              <div className="md:flex justify-between items-center mb-6">
                <h3 className="font-bold mb-1 md:m-0 md:text-lg">
                  Black Edition Stand
                </h3>
                <p className="text-moderateCyan font-medium md:text-[0.9375rem]">
                  Pledge $75 or more
                </p>
              </div>

              <p className="text-darkGray leading-6 mb-7 md:leading-8">
                You get a Black Special Edition computer stand and a personal
                thank you. You&apos;ll be added to our Backer member list.
                Shipping is included.
              </p>

              <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-2">
                  <p className="text-[2rem] font-bold">64</p>
                  <p className="text-darkGray">left</p>
                </div>
                <button className="btn">Select Reward</button>
              </div>
            </div>
          </Card>

          <Card
            borderColor="border-gray-200"
            mdPx="md:px-8"
            custom="opacity-50"
          >
            <div className="text-left text-sm md:text-base">
              <div className="md:flex justify-between items-center mb-6">
                <h3 className="font-bold mb-1 md:m-0 md:text-lg">
                  Mahogany Special Edition
                </h3>
                <p className="text-moderateCyan font-medium md:text-[0.9375rem]">
                  Pledge $200 or more
                </p>
              </div>

              <p className="text-darkGray leading-6 mb-7 md:leading-8">
                You get two Special Edition Mahogany stands, a Backer T-Shirt,
                and a personal thank you. You&apos;ll be added to our Backer
                member list. Shipping is included.
              </p>

              <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-2">
                  <p className="text-[2rem] font-bold">0</p>
                  <p className="text-darkGray">left</p>
                </div>
                <button className="disabledBtn">Out of stock</button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Card>
  );
}
