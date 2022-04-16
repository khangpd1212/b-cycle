import React from "react";
import img_circle_chart from "../../../assets/images/circle_chart.png";

function Tokenomics() {
  function ContentChart() {
    const contents = [
      { color: "#4EFFCA", text: "private sale" },
      { color: "#FFAE4E", text: "Binance Launchpad Sale" },
      { color: "#4E8AFF", text: "Team" },
      { color: "#F9D423", text: "Advisors" },
      { color: "#FF4E50", text: "Ecosystem/Treasury" },
      { color: "#91FF4E", text: "Move and Earn" },
    ];
    return (
      <div>
        {contents.map((content, key) => (
          <div className="flex gap-3 items-center" key={key}>
            <div
              style={{ backgroundColor: `${content.color}` }}
              className={`w-7 h-[10px] rounded-sm`}
            ></div>
            <p className="capitalize">{content.text}</p>
          </div>
        ))}
      </div>
    );
  }
  return (
    <div className="py-24 md1:py-0 md1:mb-36 px-64 xl:px-16 md1:px-6 -mt-80 xl:-mt-0" id="tokenomics">
      <h2 className="text-center mb-14 md1:text-4xl">Tokenomics</h2>
      <div className="flex gap-28 sm1:gap-24 justify-center items-center md1:flex-wrap">
        <div className="w-1/2 md1:w-2/3">
          <img src={img_circle_chart} alt="img_circle_chart" />
        </div>
        <ContentChart />
      </div>
    </div>
  );
}
export default Tokenomics;
