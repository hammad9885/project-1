import React from 'react'

const Image = [
    {
        id:1,
        image:"/ei1.jpg"
    },
    {
        id:2,
        image:"/ei2.jpg"
    },
    {
        id:3,
        image:"/ei3.jpg"
    },
    {
        id:4,
        image:"/ei4.jpg"
    },
    {
        id:5,
        image:"/ei5.jpg"
    },
    {
        id:6,
        image:"/ei6.jpg"
    },
]

function EightSection() {
    

    return (
        <>
            <div className='mt-7'>
                <div className='text-center my-5'><p className='text-3xl font-semibold '>@Nexava</p></div>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-y-3'>
                {Image.map((i)=>(
                    <div>
                        <img src={i.image} className='w-full md:h-40 '/>
                    </div>
                ))}
            </div>
        </>
    )
}
export default EightSection;