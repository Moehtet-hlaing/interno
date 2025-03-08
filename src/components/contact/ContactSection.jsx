import React from 'react'

const ContactSection = () => {
  return (
    <section className='contact mt-[80px] xl:mt-[200px] relative z-20'>
        <div className="contact__container container mx-auto max-w-[1200px] bg-primary  sm:rounded-[70px] py-[80px]">
            <div className="contact__text text-center max-w-[640px] mx-auto">
              <h2 className="h2 text-white mb-4">
              Do you want to join Interno?
              </h2>
              <p className="text-white mb-8 max-w-sm xl:max-w-none mx-auto">
              It is a long established fact will be distracted.
              </p>
              <button className="btn btn-accent mx-auto flex justify-center items-center">
            Connect with us
            <i className="ri-arrow-right-line text-primary "></i>

          </button>
            </div>
        </div>
    </section>
  )
}

export default ContactSection