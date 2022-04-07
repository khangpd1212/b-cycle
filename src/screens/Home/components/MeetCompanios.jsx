import React from "react";
import img_giant from "../../../assets/images/giant.png";
import img_logo_kona from "../../../assets/images/logo-kona.png";
import img_marin from "../../../assets/images/marin.png";
import img_lighting from "../../../assets/images/lighting.png";
import img_synthetic from "../../../assets/images/synthetic.png";
import img_weilan from "../../../assets/images/weilan.png";
import img_bnb from "../../../assets/images/bnb.png";

export default function MeetCompanios() {
  return (
    <div className="mt-24 mb-24">
      <div className="pb-24">
        <h1 className="text-[30px] text-center text-[#707070] tracking-[12px]">
          Meet Our Companions
        </h1>
      </div>
      <div className="flex md1:flex-wrap md1:justify-center gap-28 md1:gap-20 px-16 sm1:px-6 lg:px-12 items-center mx-16 md1:mx-0">
        <div className="w-[70%] md1:w-full">
          <img src={img_giant} className="mx-auto my-0" />
        </div>
        <div>
          <img src={img_logo_kona} />
        </div>
        <div>
          <img src={img_marin} />
        </div>
      </div>
      <div className="flex md1:flex-wrap md1:justify-center gap-10 px-16 sm1:px-6 lg:px-12 items-center mt-10 md1:mt-20">
        <div>
          <img src={img_lighting} />
        </div>
        <div>
          <img src={img_synthetic} />
        </div>
        <div>
          <img src={img_weilan} />
        </div>
        <div>
          <img src={img_bnb} />
        </div>
      </div>
    </div>
  );
}
