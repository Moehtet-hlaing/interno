import React from 'react'
import bgImg from "../../assets/grid.png";

const GridImage = () => {
  const backgroundGrid = {
    backgroundImage: `url(${bgImg})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "fixed", // Equivalent to bg-fixed
    position: "relative", // Equivalent to relative
    zIndex: 20, // Equivalent to z-20
    height: "640px", // Default height h-[640px]
    maxWidth: "1920px", // max-w-[1920px]
    margin: "0 auto", // mx-auto
    width: "100%",
  };
  return (
    <div style={backgroundGrid} className="">
    </div>
  )
}

export default GridImage