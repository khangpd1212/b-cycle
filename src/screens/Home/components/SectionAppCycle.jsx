import React from "react";
import background_app from "../../../assets/images/background4.png";
import img_app_cycle from "../../../assets/images/mobile.png";
import img_cycle from "../../../assets/images/cycle3.png";
import img_google_play from "../../../assets/images/google_play.png";
import img_app_store from "../../../assets/images/app_store.png";

const style = {
  backgroundImage: `url(${background_app})`,
  width: "100%",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center 0px, center 0px, center 0px",
  backgroundSize: "cover, cover, cover",
  position: "relative",
  top: "-160px",
  paddingTop: "300px",
};
export default function SectionAppCycle() {
  return (
    <div style={style} className="px-16 lg:px-12 sm1:px-6">
      <div className="flex sm1:flex-wrap sm1:justify-center gap-20 sm1:gap-10 items-center">
        <div className="w-[80%]">
          <img src={img_app_cycle} />
        </div>
        <div>
          <div className="flex gap-2 items-center">
            <div className="w-[8%]">
              <img src={img_cycle} className="rounded-lg" />
            </div>
            <p className="text-[28px] p-0">B-cycle</p>
          </div>
          <div className="mt-2">
            <p className="text-[48px] p-0">Web 3.0 App</p>
            <p className="text-[17px] pt-[40px]">Is coming soon in April</p>
          </div>
          <div className="flex gap-6 mt-5">
            <div className="w-1/3">
              <img src={img_google_play} />
            </div>
            <div className="w-1/3">
              <img src={img_app_store} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
