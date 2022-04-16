import React from "react";
import img_bg_header from "../../../assets/images/bg_header.png";
import img_banner_header from "../../../assets/images/banner_header.png";
const styles = {
  background: `url(${img_bg_header}) center`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};
export default function Banner() {
  return (
    <div style={styles}>
      <img
        src={img_banner_header}
        alt="img_banner_header"
        className="py-48 md1:py-40 sm2:py-28 sm3:py-20 w-full"
      />
    </div>
  );
}
