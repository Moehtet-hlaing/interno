import React from "react";

const Work = () => {
  return (
    <section className=" work mt-[80px] xl:mt-[150px] relative z-20 ">
      <div className="container mx-auto max-w-[1200px]">
        {/* text section */}
        <div className="text-center mb-24">
          <h2 data-aos="fade-up" data-aos-delay="100" className="h2 work__title mb-4">Follow Our Projects</h2>
          <p data-aos="fade-up" data-aos-delay="300" className="work__subtitle max-w-3xl mx-auto">
            It is a long established fact that a reader will be distracted by
            the of readable content of page lookings at its layouts points.
          </p>
        </div>
        {/* grid section */}
        <div data-aos="fade-up" data-aos-delay="1000" className="work__grid grid grid-cols-1 xl:grid-cols-2 gap-x-[104px] gap-y-[58px]">
          <div className="w-full h-full mx-auto max-w-[548px] ">
            <img className=" mb-6" src="../../../assets/work/01.png" alt="" />
            <div className=" flex justify-between items-center w-full">
              <div>
                <h3 className=" h3">Modern Kitchen</h3>
                <p>Decor/Architecture</p>
              </div>
              <button className=" bg-accent-secondary hover:bg-accent/20 w-[70px] h-[70px] rounded-full">
                <i className="ri-arrow-right-s-line text-3xl text-primary pl-1"></i>
              </button>
            </div>
          </div>

          <div className="w-full h-full mx-auto max-w-[548px] ">
            <img className=" mb-6" src="../../../assets/work/02.png" alt="" />
            <div className=" flex justify-between items-center w-full">
              <div>
                <h3 className=" h3">Modern Kitchen</h3>
                <p>Decor/Architecture</p>
              </div>
              <button className=" bg-accent-secondary hover:bg-accent/20 w-[70px] h-[70px] rounded-full">
                <i className="ri-arrow-right-s-line text-3xl text-primary pl-1"></i>
              </button>
            </div>
          </div>

          <div className="w-full h-full mx-auto max-w-[548px] ">
            <img className=" mb-6" src="../../../assets/work/03.png" alt="" />
            <div className=" flex justify-between items-center w-full">
              <div>
                <h3 className=" h3">Modern Kitchen</h3>
                <p>Decor/Architecture</p>
              </div>
              <button className=" bg-accent-secondary hover:bg-accent/20 w-[70px] h-[70px] rounded-full">
                <i className="ri-arrow-right-s-line text-3xl text-primary pl-1"></i>
              </button>
            </div>
          </div>

          <div className="w-full h-full mx-auto max-w-[548px] ">
            <img className=" mb-6" src="../../../assets/work/04.png" alt="" />
            <div className=" flex justify-between items-center w-full">
              <div>
                <h3 className=" h3">Modern Kitchen</h3>
                <p>Decor/Architecture</p>
              </div>
              <button className=" bg-accent-secondary hover:bg-accent/20 w-[70px] h-[70px] rounded-full">
                <i className="ri-arrow-right-s-line text-3xl text-primary pl-1"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
