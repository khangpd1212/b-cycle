import React from "react";
import img_giant from "../../../assets/images/giant.png";
import img_logo_kona from "../../../assets/images/logo-kona.png";
import img_marin from "../../../assets/images/marin.png";
import img_lighting from "../../../assets/images/lighting.png";
import img_synthetic from "../../../assets/images/synthetic.png";
import img_weilan from "../../../assets/images/weilan.png";
import img_bnb from "../../../assets/images/bnb.png";

export default function OutPartner() {
  return (
    <div className="my-24 md1:px-6" id="our_partner">
      <div className="pb-12">
        <h1 className="text-center">Our Partner</h1>
      </div>
      <div className="flex md1:flex-wrap md1:justify-center gap-2 px-48 md1:px-12 sm1:px-6 items-center">
        <div>
          <img src={img_giant} alt="img_giant" />
        </div>
        <div>
          <img src={img_logo_kona} alt="img_logo_kona" />
        </div>
        <div>
          <img src={img_marin} alt="img_marin" />
        </div>
      </div>
      <div className="flex md1:flex-wrap md1:justify-center gap-3 px-16 md1:px-12 sm1:px-6 items-center mt-8 md1:mt-0">
        <div>
          <img src={img_lighting} alt="img_lighting" />
        </div>
        <div>
          <img src={img_bnb} alt="img_bnb" />
        </div>
        <div>
          <img src={img_synthetic} alt="img_synthetic" />
        </div>
        <div>
          <img src={img_weilan} alt="img_weilan" />
        </div>
      </div>
    </div>
  );
}
