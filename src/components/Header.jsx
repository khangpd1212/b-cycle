import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";

export default function Header() {
  const [checked, setChecked] = useState(false);

  const style = {
    paddingTop: "120px",
    boxShadow: "inset 0 0 2000px rgb(255 255 255 / 50%)",
    width: "90%",
    display: "flex",
    flexDirection: "column",
    paddingLeft: "50px",
    transition: "transform 0.5s ease-in-out",
    textAlign: "center",
    background: "#ffffffe3",
    position: "absolute",
    zIndex: "1000",
  };
  return (
    <>
      <div
        style={style}
        className={`${
          !checked ? "-translate-x-[150%]" : "translate-x-0"
        } ml-[24px] lg:ml-0 md1:-ml-[6px] sm1:-ml-[50px]`}
      >
        <Link to="/" className="mb-5 p-3">
          <h3 className="text-[32px]">Home</h3>
        </Link>
        <a href="#token" className="mb-5 p-3">
          <h3 className="text-[32px]">Tokenomic</h3>
        </a>
        <a href="/#road_map" className="mb-5 p-3">
          <h3 className="text-[32px]">Roadmap</h3>
        </a>
        <Link to="/" className="mb-5 p-3">
          <h3 className="text-[32px]">Mint box</h3>
        </Link>
        <Link to="/" className="mb-5 p-3">
          <h3 className="text-[32px]">IDO</h3>
        </Link>
      </div>

      <div className="container_header px-16 lg:px-12 sm3:px-4 py-4 sm1:py-3 shadow-sm absolute w-full">
        <div
          className={`flex relative ${
            checked ? `justify-end` : `justify-between`
          } items-center`}
        >
          <Link to="/" className={checked ? "hidden" : "block"}>
            <img
              srcSet={Logo}
              alt="logo"
              className="w-[18%] sm1:w-[22%] sm1:w-[34%]"
            />
          </Link>
          <div className="cursor-pointer" onClick={() => setChecked(!checked)}>
            <div className="flex flex-col justify-between w-[32px] h-[26px]">
              <span
                className={`${
                  checked && "rotate-45"
                } origin-[0%_0%] transition ease-in-out h-1 w-full rounded-xl bg-black`}
              ></span>
              <span
                className={`${
                  checked && "scale-0"
                } transition ease-in-out h-1 w-full rounded-xl bg-black`}
              ></span>
              <span
                className={`${
                  checked && "-rotate-45"
                } origin-[0%_100%] transition ease-in-out h-1 w-full rounded-xl bg-black`}
              ></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
