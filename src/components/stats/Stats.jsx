import React from 'react'

const Stats = () => {
    
  return (
    <section data-aos="fade-up" className=' stats mt-[80px] xl:mt-[200px] relative z-20 bg-accent-secondary py-[80px] xl:py-[150px]'>
        <div  className="container max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 xl:grid-cols-4 gap-12">
                <div data-aos="fade-up" data-aos-delay="100" className="stats__item text-center xl:border-r xl:border-accent">
                    <h3 className="h1 font-primary text-accent">12</h3>
                    <p>Years Of Experience</p>
                </div>

                <div data-aos="fade-up" data-aos-delay="300" className="stats__item text-center xl:border-r xl:border-accent">
                    <h3 className="h1 font-primary text-accent">85</h3>
                    <p>Projects Completed</p>
                </div>

                <div data-aos="fade-up" data-aos-delay="500" className="stats__item text-center xl:border-r xl:border-accent">
                    <h3 className="h1 font-primary text-accent">15</h3>
                    <p>Active Projects</p>
                </div>

                <div data-aos="fade-up" data-aos-delay="700" className="stats__item text-center ">
                    <h3 className="h1 font-primary text-accent">95</h3>
                    <p>Happy Customers</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Stats