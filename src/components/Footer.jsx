import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

function Footer() {
    

    return (
        <>
      <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
    <div>
        <h1 className='text-xl font-bold mb-4'>Nexava</h1>
     <p>
      Proin efficitur, mauris vel condimentum pulvinar, velit orci consectetur ligula, eget egestas magna mi ut arcu.
     </p>
     <div className="flex space-x-4 mt-4">
      <a className="text-white" href="#">
       <FaFacebookF/>
      </a>
      <a className="text-white" href="#">
      <FaLinkedinIn/>
      </a>
      <a className="text-white" href="#">
      <FaXTwitter/>
      </a>
      <a className="text-white" href="#">
       <FaInstagram/>
      </a>
     </div>
    </div>
    <div>
     <h3 className="text-xl font-bold mb-4">
      Quick Links
     </h3>
     <ul>
      <li className="mb-2">
       <a className="text-gray-400" href="#">
        Home
       </a>
      </li>
      <li className="mb-2">
       <a className="text-gray-400" href="#">
        About Us
       </a>
      </li>
      <li className="mb-2">
       <a className="text-gray-400" href="#">
        Team
       </a>
      </li>
      <li className="mb-2">
       <a className="text-gray-400" href="#">
        Contact
       </a>
      </li>
     </ul>
    </div>
    <div>
     <h3 className="text-xl font-bold mb-4">
      Recent Post
     </h3>
     <div className="mb-4">
      <p className="text-gray-400">
       Jan 30, 2024
      </p>
      <p className="text-white">
       Correct Execution Ensures Victory.
      </p>
     </div>
     <div>
      <p className="text-gray-400">
       Jan 30, 2024
      </p>
      <p className="text-white">
       Correct Execution Ensures Victory.
      </p>
     </div>
    </div>
    <div>
     <h3 className="text-xl font-bold mb-4">
      Newsletter
     </h3>
     <p>
      Proin efficitur, mauris vel condimentum pulvinar, velit orci consectetur ligula, eget egestas magna mi ut arcu.
     </p>
     <input className="w-full p-2 mt-4 rounded" placeholder="Your email address" type="email"/>
     <button className="bg-green-500 text-white px-4 py-2 mt-4 rounded">
      Subscribe Now
     </button>
    </div>
   </div>
  <div className='text-center mt-8'>
    <p>&copy; Copyright 2024 by Nexava. All rights reserved.</p>
  </div>
      </footer>
        </>
    )
}
export default Footer;