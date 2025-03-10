import React from 'react'
import bgImg from "../../assets/hero/bg.jpg";


const HeroSection = () => {
  const BackgroundImg = {
    backgroundImage: `url(${bgImg})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "fixed", // Equivalent to bg-fixed
    position: "relative", // Equivalent to relative
    zIndex: 20, // Equivalent to z-20

  };
  
  // Responsive Styles (for xl breakpoint)
  const responsiveStyles = `
    @media (min-width: 1024px) { 
      .background-img {
        background-size: cover;
        height: 640px;
      }
    }
  
    @media (min-width: 1200px) { 
      .background-img {
        border-bottom-left-radius: 290px;
        height: 840px; /* xl:h-[840px] */
      }
    }
  `;

  return ( 
   <>
    <style>{responsiveStyles}</style>
    <section style={BackgroundImg} className=' hero background-img xl:rounded-bl-[290px] max-w-[1920px] xl:h-[840px] h-[640px] w-full'>
        <div className="container  mx-auto h-full flex justify-center items-center  ">
            {/* text section */}
            <div data-aos="fade-down" data-aos-delay="100" data-aos-duration="1500" className=" w-[567px] 2xl:w-[800px]  flex-flex-col justify-center items-center text-center xl:text-left lg:items-start mx-auto">
                <h1 className=' h1 mb-8'>Let Your Home Be Unique</h1>
                <p className=' mb-8 '>
                There are many variations of the passages of lorem Ipsum from available,variations of the passages.
                Btn text: Get free estimation
                </p>
                <button className=' btn btn-primary mx-auto xl:mx-0 flex justify-center items-center'>Get free estimation
                <i className="ri-arrow-right-long-line text-accent"></i>
                </button>
            </div>
        </div>
    </section>
   </>
  )
}

export default HeroSection