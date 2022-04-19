import React from "react";
import banner2 from "../../../assets/images/banner2.png";
import img_app_store from "../../../assets/svg/app_store.svg";
import img_ch_play from "../../../assets/svg/ch_play.svg";

const styles = {
  backgroundImage: `url(${banner2})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center center",
};
function OurMission() {
  return (
    <div
      style={styles}
      className="-top-[30rem] 2xl:-top-96 xl:-top-28 lg:-top-14 z-40 md1:hidden relative flex items-center justify-center h-[60vh]"
      id="our_mission"
    >
      <div className="mx-40 mt-20">
        <p className="text-3xl text-white text-center mb-5">
          Our Mission: Inspire millions to a healthier lifestyle, connect them
          to Web3 and combat climate change
        </p>
        <div className="flex gap-[1.25rem] items-center justify-center">
          <img
            src={img_app_store}
            alt="app store"
            className="basis-52 cursor-pointer"
          />
          <img
            src={img_ch_play}
            alt="app store"
            className="basis-52 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default OurMission;
