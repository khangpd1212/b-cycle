import React from "react";
import bg_what_is_fixex from "../../../assets/images/bg_what_is_fixnex.png"
import img_running_shoes from "../../../assets/images/running_shoes.png"

const style = {
  backgroundImage: `url(${bg_what_is_fixex})`,
  backgroundRepeat: "no-repeat",
};

export default function WhatIsFixnex() {
  return (
    <div
      style={style}
      className="flex md1:flex-wrap items-center -mt-48 xl:-mt-24 md1:-mt-32 py-52 px-28 xl:px-20 lg:px-12 sm1:px-6 gap-24 lg:gap-20 sm1:justify-center bg-center bg-[length:100%_100%] xl:bg-cover 2xl:bg-contain relative z-10 text-"
    >
      <div className="text-white basis-1/2 md1:basis-full" id="what_is_fixnex">
        <h2 className="leading-[48px] mb-6">What is fixnex </h2>
        <p className="text-[18px] md1:text-[16px] mb-6">
          B-Cycle is a pioneer Bike-to-Earn game that makes it fun and rewarding
          to live an active lifestyle. Built on Binance Smart Chain using Web3.0
          App interface, B-Cycle integrates your daily activity in real life
          with blockchain Play-to-Earn economics so you can turn your real-life
          actions into expansive gameplay and earn crypto while doing it.
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
      <div className="basis-1/2 md1:basis-full">
        <img className="" src={img_running_shoes} />
      </div>
    </div>
  );
}
