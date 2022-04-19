import React from "react";
import img_fixnex_footer from "../assets/images/logo_footer.png";
import { email, medium, telegram, twitter } from "../assets/svg/socialMedia.js";
export default function Footer() {
  const listIcon = [medium, telegram, twitter, email];
  return (
    <div className="bg-[#080606] py-10">
      <div className="w-2/5 mx-auto my-0">
        <img src={img_fixnex_footer} alt="img_fixnex_footer" />
      </div>
      <div className="flex gap-10 sm2:gap-4 justify-center items-center mt-12">
        {listIcon.map((icon, key) => (
          <div
            key={key}
            className="bg-gradient-to-r from-[#F9D423] to-[#FF4E50] 2xl:px-4 2xl:py-3 sm2:px-3
        sm2:py-2 text-white rounded-3xl"
          >
            {icon}
          </div>
        ))}
      </div>
    </div>
  );
}
