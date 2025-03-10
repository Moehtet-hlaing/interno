import React from "react";
import bgImg from "../../assets/grid.png";

const GridImage = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bgImg})` }}
      className="max-w-[1280px] mx-auto bg-center bg-repeat-y h-[640px] fixed top-0 left-0 right-0 bottom-0 z-10 hidden xl:block"
    ></div>
  );
};

export default GridImage;
