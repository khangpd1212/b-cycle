import React from 'react'
import img_BCL from '../../../assets/images/BCL.png'

export default function PCLToken() {
  return (
    <div className="px-36 lg:px-12 sm1:px-6 mt-44" id="token">
      <h1 className="text-center">THE BCL TOKEN</h1>
      <div className="flex sm1:flex-wrap gap-16 mt-20">
        <div>
          <h2 className="text-[28px]">Accrual</h2>
          <h2 className="text-[28px]">of protocol</h2>
          <h2 className="text-[28px]">revenue</h2>
          <p>
            BCL is burned to access in-app features, such as bike upgrades and
            minting new B-Cycle NFTs.
          </p>
        </div>
        <div>
          <img src={img_BCL} />
        </div>
        <div>
          <div>
            <h2 className="text-[28px]">Staking Reward</h2>
            <p>
              BCL stakers can vote to decide the distribution of staking
              rewards.
            </p>
          </div>
          <div>
            <h1 className="text-[28px]">Governance</h1>
            <p>
              Stake BCL to participate in project governance, the longer the
              lock time, the higher the voting power
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
