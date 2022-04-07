import React from "react";
import background_team from "../../../assets/images/background5.png";
import img_ceo from "../../../assets/images/ceo.png";
import img_cto from "../../../assets/images/cto.png";
import img_ArtD from "../../../assets/images/ArtD.png";

const style = {
  backgroundImage: `url(${background_team})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  padding: "250px 0 150px 0",
};
export default function TeamSection() {
  return (
    <div style={style}>
      <div className="flex md1:flex-wrap px-16 sm1:px-6 lg:px-12 gap-8 ">
        <div className="self-center -rotate-90 md1:rotate-0">
          <h2 className="text-[60px] uppercase">team</h2>
        </div>
        <div>
          <img src={img_ceo} />
          <div className="pt-[15px]">
            <h2 className="text-[26px]">Darrell Li</h2>
            <div className="flex gap-2 items-center">
              <ion-icon
                name="logo-linkedin"
                style={{ color: "#007bff" }}
              ></ion-icon>
              <p className="p-0 text-lg">CEO</p>
            </div>
          </div>
        </div>
        <div>
          <img src={img_cto} />
          <div className="pt-[15px]">
            <h2 className="text-[26px]">Daanish Croft</h2>
            <div className="flex gap-2 items-center">
              <ion-icon
                name="logo-linkedin"
                style={{ color: "#007bff" }}
              ></ion-icon>
              <p className="p-0 text-lg">CTO</p>
            </div>
          </div>
        </div>
        <div>
          <img src={img_ArtD} />
          <div className="pt-[15px]">
            <h2 className="text-[26px]">Luci Cartwright</h2>
            <div className="flex gap-2 items-center">
              <ion-icon
                name="logo-linkedin"
                style={{ color: "#007bff" }}
              ></ion-icon>
              <p className="p-0 text-lg">Art Director</p>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-[26px] px-16 sm1:px-6 lg:px-12 text-right md1:text-left mr-6 mt-10">
        And more than 20 skilled and experienced employees.
      </h1>
    </div>
  );
}
