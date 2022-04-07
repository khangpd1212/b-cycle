import React from "react";
import "../../assets/fonts/SFSports.ttf";
import banner2 from "../../assets/images/banner2.png";
import img_token_distribution from "../../assets/images/token distribution.png";
import img_tokenomic from "../../assets/images/tokenomic.png";
import Banner from "./components/Banner";
import EarningEconomy from "./components/EarningEconomy";
import Footer from "./components/Footer";
import IntroduceCycle from "./components/IntroduceCycle";
import MeetCompanios from "./components/MeetCompanios";
import PCLToken from "./components/PCLToken";
import Roadmap from "./components/Roadmap";
import SectionAppCycle from "./components/SectionAppCycle";
import TeamSection from "./components/TeamSection";

export default function Home() {
  return (
    <>
      <Banner />
      <IntroduceCycle />
      <EarningEconomy />
      <div className="-mt-24 lg:-mt-14 z-40 sm1:hidden">
        <img src={banner2} />
      </div>
      <PCLToken />
      <div className="my-32 sm1:my-16">
        <img src={img_tokenomic} />
      </div>
      <div>
        <img src={img_token_distribution} />
      </div>
      <Roadmap />
      <SectionAppCycle />
      <TeamSection />
      <MeetCompanios />
      <Footer />
    </>
  );
}
