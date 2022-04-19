import React from "react";
import img_bg_header from "../../../assets/images/bg_header.png";
import img_banner_header from "../../../assets/images/banner_header.png";
const styles = {
  bg: {
    backgroundImage: `url(${img_bg_header})`,
  },
  banner: {
    backgroundImage: `url(${img_banner_header})`,
  },
};
export default function Banner() {
  return (
    <div
      style={styles.bg}
      className="h-[1400px] 2xl:h-[800px] lg:h-[700px] md1:h-[600px] sm1:h-[500px] sm2:h-[300px] sm3:h-[280px] bg-no-repeat bg-cover bg-center"
    >
      <div
        className="h-full bg-no-repeat bg-contain bg-center relative z-40"
        style={styles.banner}
      >
        <div className="absolute left-1/2 top-1/3 xl:top-[35%] lg:top-[36%] md1:top-[38%] sm2:top-[35%] flex flex-col">
          <h1 className="text-7xl lg:text-6xl md1:text-5xl sm1:text-4xl sm2:text-2xl sm3:text-xl bg-clip-text text-transparent bg-gradient-to-r from-[#F9D423] to-[#FF4E50]">
            Join
          </h1>
          <h1 className="text-7xl lg:text-6xl md1:text-5xl sm1:text-4xl sm2:text-2xl sm3:text-xl bg-clip-text text-transparent bg-gradient-to-r from-[#F9D423] to-[#FF4E50]">
            with
          </h1>
          <h1 className="text-7xl lg:text-6xl md1:text-5xl sm1:text-4xl sm2:text-2xl sm3:text-xl bg-clip-text text-transparent bg-gradient-to-r from-[#F9D423] to-[#FF4E50]">
            us
          </h1>
        </div>
        <div className="absolute bottom-[24%] xl:bottom-[26%] lg:bottom-[29%] md1:bottom-[31%] left-[6.6%] sm1:hidden">
          <p className="uppercase text-xl lg:text-base md1:text-xs">
            be{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F9D423] to-[#FF4E50]">
              different
            </span>{" "}
            work <span className="text-[#FF4E50]">hard</span>
          </p>
        </div>
      </div>
    </div>
  );
}
