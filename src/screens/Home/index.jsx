import React from "react";
import "../../assets/fonts/SFSports.ttf";
import Banner from "./components/Banner";
import HowToEarn from "./components/HowToEarn";
import HowToBuy from "./components/HowToBuy";
import WhatIsFixnex from "./components/WhatIsFixnex";
import OurMission from "./components/OurMission";
import OutPartner from "./components/OurPartner";
import Tokenomics from "./components/Tokenomics";

export default function Home() {
  return (
    <>
      <Banner />
      <WhatIsFixnex />
      <HowToEarn />
      <OurMission />
      <Tokenomics />
      <HowToBuy />
      <OutPartner />
    </>
  );
}
