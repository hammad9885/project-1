import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Team = [
    {
        id:1,
        name:"Michael Dean",
        image:"/man1.jpg"
    },
    {
        id:2,
        name:"Brooklyn Simmons",
        image:"/woman (3).jpg"
    },
    {
        id:3,
        name:"Michael Dean",
        image:"/i3.jpg"
    },
    {
        id:4,
        name:"Esther Howard",
        image:"/woman (4).jpg"
    },
]

function TeamTwoSection() {
    

    return (
        <>
             <section className="container mx-auto px-4 py-8">
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
    {Team.map((i)=>(
    <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
     <img className="h-24 w-24 rounded-full mr-6" height="100" src={i.image} width="100" alt={i.name} />
     <div>
      <h2 className="text-xl font-bold">
       {i.name}
      </h2>
      <p className="text-gray-600">
       Roof Pros
      </p>
      <p className="text-gray-600">
       Proin efficitur, mauris vel condimentum pulvinar, velit orci consectetur.
      </p>
      <div className="flex space-x-4 mt-4">
       <a className="text-gray-600" href="#">
        <FaFacebookF/>
       </a>
       <a className="text-gray-600" href="#">
        <FaLinkedinIn/>
       </a>
       <a className="text-gray-600" href="#">
        <FaXTwitter/>
       </a>
       <a className="text-gray-600" href="#">
        <FaInstagram/>
       </a>
      </div>
     </div>
    </div>
    ))}
  
   
    
   </div>
  </section>
        </>
    )
}
export default TeamTwoSection;