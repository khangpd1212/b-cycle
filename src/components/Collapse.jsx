import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import icon_chevron_right from "../assets/svg/chevron-right.svg";
import icon_chevron_down from "../assets/svg/chevron-down.svg";

function Collapse(props) {
  const { title, children } = props;

  const [isCollapsed, setIsCollapsed] = useState(false);
  const [maxHeight, setMaxHeight] = useState(0);
  const ref = useRef(null);

  const styles = {
    maxHeight: isCollapsed ? `${maxHeight}px` : "0px",
  };  

  const onCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  useEffect(() => {
    setMaxHeight(ref.current.scrollHeight);
  },[]);

  return (
    <div
      className="cursor-pointer"
      onClick={onCollapse}
    >
      <div className="py-5">
        <div className="flex items-center justify-between">
          <p className={`capitalize text-xl ${children && "mb-[10px]"}`}>
            {title}
          </p>
          {children && (
            <div className="basis-auto transition-all duration-200">
              {isCollapsed ? (
                <div className="w-6">
                  <img src={icon_chevron_down} alt="chevron down icon" />
                </div>
              ) : (
                <div className="w-6">
                  <img src={icon_chevron_right} alt="chevron up icon" />
                </div>
              )}
            </div>
          )}
        </div>
        <div
          ref={ref}
          style={styles}
          className={`text-[#685C5C] overflow-hidden transition-all duration-200 w-5/6`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element,
};

export default Collapse;
