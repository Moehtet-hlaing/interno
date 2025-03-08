import React from 'react'

const HeroSection = () => {
  return (
    <section className=' hero h-[640px] xl:h-[840px] max-w-[1920px] mx-auto bg-[url("./assets/hero/bg.jpg")] bg-center lg:bg-cover bg-no-repeat bg-fixed xl:rounded-bl-[290px] relative z-20'>
        <div className="container mx-auto xl:mx-0 h-full flex justify-center items-center">
            {/* text section */}
            <div className=" w-[567px] 2xl:w-[800px]  flex-flex-col justify-center items-center text-center xl:text-left lg:items-start">
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
  )
}

export default HeroSection