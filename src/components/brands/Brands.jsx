import React from 'react'

const Brands = () => {
  return (
    <section className=' brand mt-[80px] xl:mt-[150px] relative z-20'>
        <div className="container max-w-[1200px] mx-auto">
            <div className=' flex flex-col xl:flex-row justify-around items-center gap-12'>
                <img src="../../../assets/brands/01.svg" alt="" className="brands__img" />
                <img src="../../../assets/brands/02.svg" alt="" className="brands__img" />
                <img src="../../../assets/brands/03.svg" alt="" className="brands__img" />
                <img src="../../../assets/brands/04.svg" alt="" className="brands__img" />
                <img src="../../../assets/brands/05.svg" alt="" className="brands__img" />
            </div>
        </div>
    </section>
  )
}

export default Brands