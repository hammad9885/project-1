import React from 'react'
import { FaComment, FaUser } from 'react-icons/fa';

const Seven = [
    {
        id:1,
        image:"/se1.jpg"
    },
    {
        id:2,
        image:"/se2.jpg"
    },
    {
        id:3,
        image:"/se3.jpg"
    },
]

function SevenSection() {
    
    return (
        <>
            <div>
                <div className='text-center mb-7'>
                    <p className='text-green-600 uppercase space-y-4 text-[17px]'>latest posts</p>
                    <h1 className='font-semibold text-[30px]'>Articles & Blog News</h1>
                </div>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 mx-[120px]'>
                    {Seven.map((one)=>(
                    <div className='border p-3'>
                        <img src={one.image} className='w-full h-80 ' />
                        <p className='flex gap-x-3 my-3 text-start text-[15px]'><FaUser className='top-[3px] relative'/> admin  <FaComment className='top-[3px] left-[6px] relative'/> 0 comments </p>
                        <h1 className='font-semibold mb-2 text-[20px]'>Correct Execution Ensures Victory.</h1>
                        <p className='text-[15px] text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, aperiam.</p>
                    </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default SevenSection;