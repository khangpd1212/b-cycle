import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import { useViewport } from "../../hooks/useViewport";
import Hamburger from "./Hamburger";
import Navbar from "./Navbar";

export default function Header() {
  const { width } = useViewport();
  const breakpoint = "1024";

  const [checked, setChecked] = useState(false);
  const isStickyHeader = useRef(false);

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  const isSticky = () => {
    const scrollTop = window.scrollY;
    scrollTop >= 250
      ? (isStickyHeader.current = true)
      : (isStickyHeader.current = false);
  };
  console.log(
    "🚀 ~ file: index.jsx ~ line 18 ~ window.addEventListener ~ isFixedHeader.current",
    isSticky.current
  );
  return (
    <div className="bg-white px-20 lg:px-12 sm1:px-4 sm3:px-4 py-3 sm1:py-3 w-full sticky -top-1 z-[999]">
      <div
        className={`flex gap-12 relative items-center ${
          width <= breakpoint && !checked && "justify-between"
        } ${checked && "justify-end"}`}
      >
        <Link
          to="/"
          className={`${
            checked ? "hidden" : "block"
          } basis-1/6 md1:basis-1/5 sm1:basis-1/3`}
        >
          <img srcSet={Logo} alt="logo" />
        </Link>
        <Navbar checked={checked} setChecked={setChecked} />
        <Hamburger checked={checked} setChecked={setChecked} />
      </div>
    </div>
  );
}
