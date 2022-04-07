import React from "react";
import { Link } from "react-router-dom";

export default function SectionPopup() {
  return (
    <div className="bg-[#2f2f30] relative top-0 left-0 right-0 z-1001 w-full block transition-all text-center py-2">
      <h1 className="text-[20px] md1:text-[16px] text-white">
        IDO IS NOW LIVE, {(
          <Link to="#" className="text-[#51c8e4] underline">
            JOIN NOW
          </Link>
        )}
      </h1>
    </div>
  );
}
