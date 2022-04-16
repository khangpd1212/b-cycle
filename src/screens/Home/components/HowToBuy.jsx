import React from "react";

export default function HowToBuy() {
  const listContent = [
    {
      title: "1. Download Metamask",
      content:
        "For Desktop: Turn on your Google Chrome or Brave then visit metamask.io. Download the MetaMask extension and set up a wallet.On mobile: Get MetaMask’s app for IOS or Android.",
    },
    {
      title: "2. Buy BNB",
    },
    {
      title: "3. Transfer BNB to Metamask",
    },
    {
      title: "4. When on Zootoken.io",
    },
    {
      title: "5. When on PancakeSwap",
    },
    {
      title: "6. Swap BNB for ZOOT",
    },
    {
      title: "7. View your ZOOT in Metamask",
    },
  ];
  return (
    <div className="md1:px-6">
      <div className="text-center mb-12" id="how_to_buy">
        <p className="text-3xl uppercase mb-4">how to buy</p>
        <h1>become a fitnex-er</h1>
      </div>
      <div className="bg-[#FAFAFA] px-12 md1:mx-0 mx-24 rounded-[40px]">
        <p className="text-2xl text-center uppercase pt-8">
          How to buy fitnex on PancakeSwap
        </p>
        <div className="flex flex-col divide-y divide-[#C4C4C4]">
          {listContent.map((item, key) => (
            <div className="py-5" key={key}>
              <p
                className={`capitalize text-xl ${item.content && "mb-[10px]"}`}
              >
                {item.title}
              </p>
              {item.content && (
                <span className="text-[#685C5C]">{item.content}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
