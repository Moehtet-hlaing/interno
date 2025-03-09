import React from "react";
import aboutImg from "../../assets/about/img.png"

const About = () => {
  return (
    <section className="about mt-[80px] xl:mt-[200px] relative z-20">
      <div className="container mx-auto max-w-[1200px] xl:p-0">
        <div className=" flex flex-col xl:flex-row justify-between items-center text-center xl:text-left gap-8 xl:gap-[74px] ">
          {/* text section */}
          <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100" className="about__img order-2 xl:order-none flex-1 max-w-xl xl:max:w-[410px] flex flex-col items-center xl:items-start gap-8">
            <h2 className="h2">
              We Create The Art Of Stylish Living Stylishly
            </h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the of readable content of a page when lookings at its layouts the
              points of using that it has a more-or-less normal.
            </p>
          {/* phone */}
          <div className=" flex justify-center items-center gap-4 xl:justify-start">
            <div className=" bg-accent/15 w-[93px] h-[93px] rounded-full flex justify-center items-center ">
            <i className="ri-phone-fill text-4xl"></i>
            </div>
            <div className=" text-left">
                <div className=" text-2xl font-bold">090 123 456</div>
                <div className="">Call Us Anytime</div>
            </div>
          </div>
            <button className=' btn btn-primary mx-auto xl:mx-0 inline-flex justify-center items-center'>Get free estimation
                <i className="ri-arrow-right-long-line text-accent"></i>
                </button>
          </div>
          {/* img section */}
          <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="100" className="max-w-[453px] order-1 xl:order-none mx-auto xl:max-w-none xl:mx-auto">
            <img src={aboutImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
