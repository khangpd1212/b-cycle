import React from "react";
import img_background2 from "../../../assets/images/background2.png";
import img_cycle from "../../../assets/images/cycle2.png";

const style = {
  backgroundImage: `url(${img_background2})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center 0px, center 0px, center 0px",
  backgroundSize: "cover, cover, cover",
  marginTop: "-10%",
  position: "relative",
};

export default function () {
  return (
    <div
      className="relative -mt-[18%] md1:-mt-[25%] z-30 h-[1070px] lg:h-[1250px] z-30"
      style={style}
    >
      <div className="flex sm1:flex-wrap sm1:justify-center items-end gap-24 sm1:gap-20 lg:gap-14 px-16 sm1:px-6 lg:px-12 absolute top-80">
        <div>
          <h2>A DUAL EARNING ECONOMY</h2>
          <p className="text-[20px] md1:text-lg">
            B-Cycle allows players to generate income through two separate
            economies:
          </p>
          <p className="md1:text-sm">
            1. Biking daily to complete in-game quests and receive BCL reward
            tokens.
          </p>
          <p className="md1:text-sm">
            2. Our carefully-designed Play-to-Earn economy involving minting,
            leasing, buying and selling in-game B-Cycle NFTs.
          </p>
          <p className="md1:text-sm">
            This not only creates two economies in which players can earn, but
            it also makes the marketplace opportunity much larger with B-Cycle
            NFTs all being traded among players willing to pay to get ahead
            faster. This is the foundation of our economic model from which we
            can grow and expand with additional content as the game grows in
            popularity.
          </p>
          <p className="md1:text-sm">
            A small part of fees will be deducted from sales and rental
            transactions on B-Cycle to ensure the sustainable development of the
            B-Cycle ecosystem.
          </p>
        </div>
        <div>
          <img
            className="max-w-xl lg:max-w-[30rem] md1:max-w-[20rem] sm1:max-w-full"
            src={img_cycle}
          />
        </div>
      </div>
    </div>
  );
}
