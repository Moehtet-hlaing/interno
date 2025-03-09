import React from 'react'
import svg1 from "../../assets/brands/01.svg";
import svg2 from "../../assets/brands/02.svg";
import svg3 from "../../assets/brands/03.svg";
import svg4 from "../../assets/brands/04.svg";
import svg5 from "../../assets/brands/05.svg";



const Brands = () => {
  return (
    <section className=' brand mt-[80px] xl:mt-[150px] relative z-20'>
        <div className="container max-w-[1200px] mx-auto">
            <div className=' flex flex-col xl:flex-row justify-around items-center gap-12'>
                <img data-aos="fade-up" data-aos-delay="100" src={svg1} alt="" className="brands__img" />
                <img data-aos="fade-up" data-aos-delay="300" src={svg2} alt="" className="brands__img" />
                <img data-aos="fade-up" data-aos-delay="500" src={svg3} alt="" className="brands__img" />
                <img data-aos="fade-up" data-aos-delay="700" src={svg4} alt="" className="brands__img" />
                <img data-aos="fade-up" data-aos-delay="900" src={svg5} alt="" className="brands__img" />
            </div>
        </div>
    </section>
  )
}

export default Brands