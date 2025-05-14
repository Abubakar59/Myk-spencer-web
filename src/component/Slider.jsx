import React from 'react'

const Slider = () => {
    return (
        <div>
            <div className='relative'>
                <img src="https://img.freepik.com/free-photo/medium-shot-boy-posing-with-monochrome-outfit_23-2151044505.jpg?semt=ais_hybrid&w=740" alt="" className='w-full' />
                <div className=' absolute inset-5'>

                    <div>
                        <h1 className='justify-center items-center flex text-xl md:text-3xl text-white '>

                            Welcome to MYK-Spencer
                        </h1>
                        <div className='text-white text-[7px]  md:py-10 md:text-2xl md:mt-20 '>

                            <p>
                                Where Style Meets Sophistication
                            </p>
                            <p>


                                Discover timeless fashion and modern elegance at </p>
                            <p>MYK-Spencer — your go-to boutique for curated collections that speak class, <p>
                                confidence, and creativity.
                                Whether you're dressing for a casual day out or a grand occasion, </p>
                                we bring you handpicked pieces that combine quality with trend.
                            </p>
                            <p>


                                👗 Elegant Dresses | 👔 Sharp Menswear | 👜 Chic Accessories
                            </p>
                            <p>

                                Every piece is selected to help you express your unique style.
                            </p>
                            <p>

                                New Arrivals Weekly • Worldwide Shipping • Unmatched Quality
                            </p>
                            <p>

                                Step in. Dress up. Stand out.
                            </p>
                            🛍️ Shop Now and elevate your wardrobe with MYK-Spencer.</div>


                        <div className=' hidden md:block h-10  bg-gray-300 md:w-[50%] md:h-20 mt-30 flex items-center justify-around'> <div>
                            <h1 className=' md:text-3xl '>10% OFF Discount Coupons</h1>
                            <p className=' mtext-sm'>Subscribe us to get 10% OFF on all the purchases</p>
                        </div>
                            <div> <button className='bg-black text-white md:w-30 rounded-2xl h-9'>Email Us Now</button></div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slider
