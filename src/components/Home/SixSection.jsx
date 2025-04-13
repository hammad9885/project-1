import React from 'react'

const imag=[
    {
        id:1,
        immage:"i1.jpg"
    },
    {
        id:2,
        immage:"i2.jpg"
    },
    {
        id:3,
        immage:"i3.jpg"
    },
    {
        id:4,
        immage:"i4.jpg"
    },
    {
        id:5,
        immage:"i5.jpg"
    },
]

function SixSection() {
    

    return (
        <>
            <div className='mx-[120px]'>
                <p className='text-green-600 uppercase text-[17px]'>latest gallery</p>
                <h1 className='text-3xl font-semibold'>Your Satisfaction Is Our Top Priority <br /> When It Comes To Roofing</h1>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 space-y-5 flex justify-center items-center space-x-3 mx-[120px] py-9'>

           {imag.map((images)=>(
             <div>
             <img src={images.immage} className='h-60 min-w-full sm:h-60' />
            </div>
           ))}
           </div>
        </>
    )
}
export default SixSection;