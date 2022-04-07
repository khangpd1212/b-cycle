import React from "react";
import img_banner_introduce_cycle from "../../../assets/images/background1.png";
import img_cycle1 from "../../../assets/images/cycle1.png";

const style = {
  backgroundImage: `url(${img_banner_introduce_cycle})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  position: "relative",
};

export default function IntroduceCycle() {
  return (
    <div
      className="-mt-[101px] sm1:-mt-16 relative h-[950px] z-40"
      style={style}
    >
      <div className="flex sm1:flex-wrap sm1:justify-center items-center gap-48 lg:gap-20 px-16 sm1:px-6 lg:px-12 absolute top-36">
        <div className="text-white">
          <h2>what is</h2>
          <h2>B-cycle ?</h2>
          <p className="text-[18px] md1:text-[16px]">
            B-Cycle is a pioneer Bike-to-Earn game that makes it fun and
            rewarding to live an active lifestyle. Built on Binance Smart Chain
            using Web3.0 App interface, B-Cycle integrates your daily activity
            in real life with blockchain Play-to-Earn economics so you can turn
            your real-life actions into expansive gameplay and earn crypto while
            doing it.
          </p>
          <p className="text-[18px] md1:text-[16px]">
            Using wearable data, B-Cycle gameplay converts players' real-life
            cycling into crypto tokens to progress in the game. We call this
            Bike-to-Play. In this way, we replace traditional sedentary grinding
            with physical movement. While doing so, players can choose at any
            point to join the in-game Play-to-Earn economy to earn financial
            rewards, hence Move-to-Earn.
          </p>
        </div>
        <div className="sm1:mt-24">
          <img
            className="max-w-xl lg:max-w-[30rem] md1:max-w-[20rem] sm1:max-w-full"
            src={img_cycle1}
          />
        </div>
      </div>
    </div>
  );
}
