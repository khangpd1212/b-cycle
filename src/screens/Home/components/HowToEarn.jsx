import React from "react";
import bg_how_to_earn from "../../../assets/images/bg_how_to_earn.png";
import img_running_man from "../../../assets/images/running_man.png";

export default function () {
  return (
    <div className="flex md1:flex-wrap md1:justify-center items-center gap-24 sm1:gap-20 lg:gap-14 pl-28 pr-20 xl:px-20 lg:px-12 sm1:px-6 relative z-0 -top-52 xl:-top-0 md1:py-32 xl:my-20">
      <div className="basis-1/2 md1:basis-full" id="how_to_earn">
        <h2>how to earn</h2>
        <div className="mt-6">
          <p className="text-[18px] leading-6">
            FIXNEX allows players to generate income through two separate
            economies:
          </p>
          <p className="text-[18px] leading-6 mt-3">
            1. Biking daily to complete in-game quests and receive BCL reward
            tokens.
          </p>
          <p className="text-[18px] leading-6 mt-3">
            2. Our carefully-designed Play-to-Earn economy involving
            minting,leasing, buying and selling in-game B-Cycle NFTs.
          </p>
          <p className="text-[18px] leading-6 mt-3">
            This not only creates two economies in which players can earn, but
            it also makes the marketplace opportunity much larger with B-Cycle
            NFTs all being traded among players willing to pay to get ahead
            faster. This is the foundation of our economic model from which we
            can grow and expand with additional content as the game grows in
            popularity.
          </p>
          <p className="text-[18px] leading-6 mt-3">
            A small part of fees will be deducted from sales and rental
            transactions on B-Cycle to ensure the sustainable development of the
            B-Cycle ecosystem.
          </p>
        </div>
      </div>
      <div className="basis-1/2 md1:basis-full">
        <img src={img_running_man} alt="running man" />
      </div>
    </div>
  );
}
