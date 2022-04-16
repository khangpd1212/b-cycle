import React from "react";
import PropTypes from "prop-types";

function Hamburger(props) {
  const { checked, setChecked } = props;

  return (
    <div className="cursor-pointer hidden lg:block" onClick={() => setChecked(!checked)}>
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
  );
}

Hamburger.propTypes = {
  checked: PropTypes.bool.isRequired,
  setChecked: PropTypes.func.isRequired,
};

export default Hamburger;
