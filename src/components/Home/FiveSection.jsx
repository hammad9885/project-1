import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';


const Member = [
    {
      id:1,
      image:"/woman (3).jpg",
      name:"Michael Dean"
    },
    {
      id:2,
      image:"/woman (4).jpg",
      name:"Brooklyn Simmons"
    },
    {
      id:3,
      image:"/worker3.jpg",
      name:"Esther Howard"
    },

];

function FiveSection() {
    

    return (
        <>
        <div className='my-9'>
            <div className='text-center'>
                <p className='uppercase text-[17px] text-green-600'>active members</p>
                <h1 className='text-4xl font-semibold'>Expert Roof Services That Exceed <br /> Expartations</h1>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 space-y-5 flex justify-center items-center space-x-3 mx-[120px] py-9'>
            {Member.map((item) => (
                <div className='text-center border rounded-lg p-3'>
                    <img src={item.image} className='w-full md:h-60 h-80 rounded-lg'/>
                    <h1 className='my-2 text-3xl font-semibold'>{item.name}</h1>
                    <p className='mb-2 text-[17px]'>Roof Pros</p>
                    <button className='flex space-x-2 mb-3 ms-32'><FaFacebookF/> <FaLinkedinIn/> <FaXTwitter/> <FaInstagram/></button>
                </div>
                    ))}
            </div>
        </div>
        </>
    )
}
export default FiveSection;