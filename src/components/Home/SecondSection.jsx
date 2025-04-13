import React from 'react'

function SecondSection() {
    

    return (
        <>
            <div className='my-9 grid grid-cols sm:grid-cols-1 lg:grid-cols-2'>
        
                <div className='nn'>
                    <img src="/Roof.jpg" className='w-[615px] h-[360px]' />
                </div>
                <div className='mt-5 px-20 text-center md:text-start'>
            <p className='text-green-600 text-[17px]'>PROVEN RELIABILITY</p>
            <h1 className='font-semibold text-4xl'>Ready To Talk About Roofing?</h1>
            <p className='text-gray-400 text-[16px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus perspiciatis ipsam odit ipsa. Ut dignissimos, nemo sequi quibusdam perferendis cupiditate magnam minima ratione fuga. Unde dignissimos doloribus nemo eaque ad.</p>
            <p className='text-[17px] font-semibold'>Mon-Fri: 10AM - 7PM</p>
            <p className='text-[17px] font-semibold'>Saturday: 10AM - 5PM</p>
                </div>
            </div>
        </>
    )
}
export default SecondSection;