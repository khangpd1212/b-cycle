import React from "react";
import PropTypes from "prop-types";
import { useViewport } from "../../hooks/useViewport";

const style = {
  boxShadow: "inset 0 0 2000px rgb(255 255 255 / 50%)",
  width: "70%",
  display: "flex",
  flexDirection: "column",
  transition: "transform 0.5s ease-in-out",
  textAlign: "center",
  background: "#ffffffe3",
  position: "fixed",
  top: '0',
  zIndex: "1000",
  gap: '50px',
  padding: '60px 0px',
  left: 0,
};

const listLink = [
  { href: "what_is_fixnex", name: "what is fixnex" },
  { href: "how_to_earn", name: "how to earn" },
  { href: "tokenomics", name: "tokenomics" },
  { href: "how_to_buy", name: "how to buy" },
  { href: "our_partner", name: "our partner" },
];
function Navbar({ checked, setChecked }) {
  const { width } = useViewport();
  const breakpoint = "1024";

  return (
    <>
      {width <= breakpoint ? (
        <div
          style={style}
          className={`${
            !checked ? "-translate-x-[150%]" : "translate-x-0"
          } text-black uppercase overflow-x-scroll h-full`}
        >
          {listLink.map((link, key) => (
            <a
              key={key}
              href={`#${link.href}`}
              className=" hover:text-orange-500"
              onClick={() => setChecked(!checked)}
            >
              <p className="text-xl">{link.name}</p>
            </a>
          ))}
        </div>
      ) : (
        <div className="flex gap-7 lg:gap-5 items-center p-0 uppercase">
          {listLink.map((link, key) => (
            <a href={`#${link.href}`} key={key} className="hover:text-orange-500 transition-all duration-300">
              <p className="text-xl xl:text-lg lg:text-base">{link.name}</p>
            </a>
          ))}
        </div>
      )}
    </>
  );
}

Navbar.propTypes = {
  checked: PropTypes.bool.isRequired,
  setChecked: PropTypes.func.isRequired,
};

export default Navbar;
