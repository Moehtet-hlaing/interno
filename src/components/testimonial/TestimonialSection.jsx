import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; // Import slick styles
import "slick-carousel/slick/slick-theme.css"; // Import slick theme styles

const TestimonialSection = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Added slidesToShow here
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="testimonial mt-[80px] xl:mt-[200px] relative z-20">
      <div className="testimonial__bg container mx-auto max-w-[1200px] bg-accent-secondary rounded-[70px] px-6">
        <div className=" flex flex-col justify-center items-center py-[73px]">
          <h2 className=" testimonial__title h2 mb-9 text-center"> What clients say</h2>
          <div className="w-full">
            <div className=" h-[400px]">
              <Slider {...settings} className="pb-8">
                {/* Slide 1 */}
                <div className="px-6 ">
                  <div className="testimonial__item w-full bg-white max-w-[450px] max-h-[340px] rounded-[30px] flex flex-col justify-center items-center p-9 mx-auto">
                    <div className="flex gap-4 justify-center items-center mb-6">
                      <img src="../../../assets/testimonial/01.png" alt="" />
                      <div>
                        <h3 className=" h3">Nattasha Mith</h3>
                        <div>Greenville, USA</div>
                      </div>
                    </div>
                    <p>
                      Lorem Ipsum is simply dummy text of the typesetting
                      industry. Ipsum is simply dummy Ipsum has been.
                    </p>
                  </div>
                </div>

                {/* Slide 2 */}
                <div className="px-6 ">
                  <div className="testimonial__item w-full bg-white max-w-[450px] max-h-[340px] rounded-[30px] flex flex-col justify-center items-center p-9 mx-auto">
                    <div className="flex gap-4 justify-center items-center mb-6">
                      <img src="../../../assets/testimonial/02.png" alt="" />
                      <div>
                        <h3 className=" h3">Jessica White</h3>
                        <div>Oak Ridge, USA</div>
                      </div>
                    </div>
                    <p>
                    Lorem Ipsum is simply dummy text of the typesetting
                    industry. Ipsum is simply dummy Ipsum has been.
                    </p>
                  </div>
                </div>

                {/* Slide 3 */}
                <div className="px-6 ">
                  <div className="testimonial__item w-full bg-white max-w-[450px] max-h-[340px] rounded-[30px] flex flex-col justify-center items-center p-9 mx-auto">
                    <div className="flex gap-4 justify-center items-center mb-6">
                      <img src="../../../assets/testimonial/03.png" alt="" />
                      <div>
                        <h3 className=" h3">Mike Davis</h3>
                        <div>Berlin, Germany</div>
                      </div>
                    </div>
                    <p>
                    Lorem Ipsum is simply dummy text of the typesetting
                    industry. Ipsum is simply dummy Ipsum has been.
                    </p>
                  </div>
                </div>

                {/* Slide 4 */}
                <div className="px-6 ">
                  <div className="testimonial__item w-full bg-white max-w-[450px] max-h-[340px] rounded-[30px] flex flex-col justify-center items-center p-9 mx-auto">
                    <div className="flex gap-4 justify-center items-center mb-6">
                      <img src="../../../assets/testimonial/04.png" alt="" />
                      <div>
                        <h3 className=" h3">Olivia Wilson</h3>
                        <div>Blue Ridge, France</div>
                      </div>
                    </div>
                    <p>
                    Lorem Ipsum is simply dummy text of the typesetting
                    industry. Ipsum is simply dummy Ipsum has been.
                    </p>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
