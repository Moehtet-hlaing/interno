import React from "react";
import newsImg1 from "../../assets/news/01.png";
import newsImg2 from "../../assets/news/02.png";
import newsImg3 from "../../assets/news/03.png";


const News = () => {
  return (
    <section className=" news mt-[80px] xl:mt-[200px] relative z-20">
      <div className="container m-auto max-w-[1200px]">
        {/* text */}
        <div className=" max-w-[810px] mx-auto text-center mb-[52px]">
          <h2 data-aos="fade-up" data-aos-delay="100" className=" news__title h2 mb-4">Articles & News</h2>
          <p data-aos="fade-up" data-aos-delay="300" className="news__subtitle">
            It is a long established fact that a reader will be distracted by
            the of readable content of a page when lookings at its layouts the
            points of using.
          </p>
        </div>
        {/* gird */}
        <div className="new__grid grid grid-cols-1 xl:grid-cols-3 gap-[27px]">
          <div data-aos="fade-up" data-aos-delay="100" className="news__item w-full max-w-[382px] h-[520px] border border-primary/20 rounded-[62px] p-[20px] hover:bg-accent-secondary transition-all cursor-pointer mx-auto xl:mx-0 group">
            <img src={newsImg1} alt="" />
            <h3 className="h3">
              Let’s Get Solution For Building Construction Work
            </h3>
            <div className=" flex justify-between items-center gap-[30px]">
              <p className="text-base">22 June,2024</p>
              <button className=" bg-accent-secondary w-[52px] h-[52px] rounded-full group-hover:bg-white transition-all">
                <i className="ri-arrow-right-s-line text-3xl text-primary pl-1"></i>
              </button>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="500" className="news__item w-full max-w-[382px] h-[520px] border border-primary/20 rounded-[62px] p-[20px] hover:bg-accent-secondary transition-all cursor-pointer mx-auto xl:mx-0 group">
            <img src={newsImg2} alt="" />
            <h3 className="h3">Low Cost Latest Invented Interior Designing</h3>
            <div className=" flex justify-between items-center gap-[30px]">
              <p className="text-base">24 June,2024</p>
              <button className=" bg-accent-secondary w-[52px] h-[52px] rounded-full group-hover:bg-white transition-all">
                <i className="ri-arrow-right-s-line text-3xl text-primary pl-1"></i>
              </button>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="900" className="news__item w-full max-w-[382px] h-[520px] border border-primary/20 rounded-[62px] p-[20px] hover:bg-accent-secondary transition-all cursor-pointer mx-auto xl:mx-0 group">
            <img src={newsImg3} alt="" />
            <h3 className="h3">Best For Any Office & Business Interior</h3>
            <div className=" flex justify-between items-center gap-[30px]">
              <p className="text-base">28 June,2024</p>
              <button className=" bg-accent-secondary w-[52px] h-[52px] rounded-full group-hover:bg-white transition-all">
                <i className="ri-arrow-right-s-line text-3xl text-primary pl-1"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
