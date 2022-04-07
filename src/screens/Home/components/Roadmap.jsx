import React from "react";
import background_roadmap from "../../../assets/images/background3.png";
import img_road_map from "../../../assets/images/road_map.png";

const style = {
  backgroundImage: `url(${background_roadmap})`,
  width: "100%",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center 0px, center 0px, center 0px",
  backgroundSize: "cover, cover, cover",
  padding: "200px 0 200px 0",
};

export default function Roadmap() {
  return (
    <div style={style} id="road_map">
      <img src={img_road_map} />
    </div>
  );
}
