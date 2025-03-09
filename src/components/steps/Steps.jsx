import React from 'react'

const Steps = () => {
  return (
    <section className=' steps mt-[80px] xl:mt-[200px] relative z-20'>
        <div className="container mx-auto">
            <div className="grid grid-cols-1 gap-12 xl:grid-cols-3 xl:max-w-[1200px] mx-auto">
                <div data-aos="fade-up" data-aos-delay="100" className='steps__step text-center xl:pl-[24px]' >
                    <div className="mb-4">
                    <i className="ri-compasses-2-line text-5xl text-accent"></i>
                    </div>
                    <h3 className="h3 mb-5">Project Planning</h3>
                    <p className="max-w-md mx-auto">
                    There are many variations of the passages of lorem Ipsum from available, majority.
                    </p>
                    <a href="#" className=' font-medium flex justify-center items-center gap-2'>
                        Read More
                        <i className="ri-arrow-right-line text-accent"></i>
                    </a>
                </div>
                <div data-aos="fade-up" data-aos-delay="300" className='steps__step text-center' >
                    <div className="mb-4">
                    <i className="ri-magic-line text-5xl text-accent"></i>
                    </div>
                    <h3 className="h3 mb-5">Gaining Materials</h3>
                    <p className="max-w-md mx-auto">
                    There are many variations of the passages of lorem Ipsum from available, majority.
                    </p>
                    <a href="#" className=' font-medium flex justify-center items-center gap-2'>
                        Read More
                        <i className="ri-arrow-right-line text-accent"></i>
                    </a>
                </div>
                <div data-aos="fade-up" data-aos-delay="500" className='steps__step text-center xl:pr-[24px]' >
                    <div className="mb-4">
                    <i className="ri-tools-line text-5xl text-accent"></i>
                    </div>
                    <h3 className="h3 mb-5">Project Execution</h3>
                    <p className="max-w-md mx-auto">
                    There are many variations of the passages of lorem Ipsum from available, majority.
                    </p>
                    <a href="#" className=' font-medium flex justify-center items-center gap-2'>
                        Read More
                        <i className="ri-arrow-right-line text-accent"></i>
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Steps