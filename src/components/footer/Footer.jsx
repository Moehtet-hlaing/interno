import React from "react";

const Footer = () => {
  return (
    <section className=" footer mt-[80px] xl:mt-[200px] relative z-20">
      <div className="container max-w-[1200px] mx-auto p-0">
        {/* left div */}
        <div data-aos="fade-up" data-aos-delay="100" className=" flex flex-col xl:flex-row xl:gap-[100px] xl:mb-[150px]">
          <div className="footer__item w-full max-w-[400px] mx-auto mb-8 text-center xl:text-left">
            {/* logo */}
            <a
              href="#"
              className=" flex justify-center items-center xl:justify-start mb-8"
            >
              <img src="../../../assets/logo.svg" alt="" />
            </a>
            <p className=" mb-8 text-xl">
              It is a long established fact that a reader will be distracted
              lookings.
            </p>

            {/* social */}
            <ul className=" text-primary flex gap-[54px] justify-center xl:justify-start">
              <li>
                <a href="#">
                  <i className="ri-facebook-fill"></i>
                </a>
              </li>

              <li>
                <a href="#">
                  <i className="ri-twitter-fill"></i>
                </a>
              </li>

              <li>
                <a href="#">
                  <i className="ri-linkedin-fill"></i>
                </a>
              </li>

              <li>
                <a href="#">
                  <i className="ri-instagram-fill"></i>
                </a>
              </li>
            </ul>
          </div>

          {/* right div */}
          <div className="flex-1 flex flex-col xl:flex-row text-center xl:text-left gap-12 xl:gap-[100px] xl:justify-end ">
            <div data-aos="fade-up" data-aos-delay="300" className="footer__item">
              <h3 className="h3 mb-3">Pages</h3>
              <ul className="flex flex-col gap-4">
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Testimonials</a>
                </li>
                <li>
                  <a href="#">Our Work</a>
                </li>
                <li>
                  <a href="#">News</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>

            <div data-aos="fade-up" data-aos-delay="500" className="footer__item">
              <h3 className="h3 mb-3">Services</h3>
              <ul className="flex flex-col gap-4">
                <li>
                  <a href="#">Kitchen</a>
                </li>
                <li>
                  <a href="#">Living Area</a>
                </li>
                <li>
                  <a href="#">Bathroom</a>
                </li>
                <li>
                  <a href="#">Bedroom</a>
                </li>
              </ul>
            </div>

            <div data-aos="fade-up" data-aos-delay="700" className="footer__item max-w-[260px] mx-auto xl:mx-0">
              <h3 className="h3 mb-3">Contact</h3>
              <div className="flex flex-col gap-6 text-[20px]">
                <p>55 East Birchwood Ave. Brooklyn, New York 11201</p>
                <p>contact@interno.com</p>
                <p>(123) 456 - 7890</p>
              </div>
            </div>
          </div>
        </div>

        {/* copy */}
        <p className="footer__copyright text-center text-lg py-10 bg-white xl:border-t">
          Copyright © Interno 2024. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
