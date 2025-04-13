import React from 'react'

function AboutTwo() {
    

    return (
        <>
        
         <section class="container mx-auto px-4 py-8">
   <div class="flex justify-center space-x-4">
    <button class="px-4 py-2 border border-gray-300 hover:bg-green-600 hover:text-white">
     ALL
    </button>
    <button class="px-4 py-2 border border-gray-300 hover:bg-green-600 hover:text-white">
     Renovation
    </button>
    <button class="px-4 py-2 border border-gray-300 hover:bg-green-600 hover:text-white">
     Installation
    </button>
    <button class="px-4 py-2 border border-gray-300 hover:bg-green-600 hover:text-white">
     Modified
    </button>
   </div>
  </section>
            
  <section class="container mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
   <div class="relative">
    <img class="w-full h-64 object-cover" src="/a1.jpg"/>
   </div>
   <div class="relative">
    <img class="w-full h-64 object-cover" src="/a2.jpg"/>
   </div>
   <div class="relative">
    <img class="w-full h-64 object-cover" src="/a3.jpg"/>
   </div>
   <div class="relative">
    <img class="w-full h-64 object-cover" src="/a4.jpg"/>
   </div>
   <div class="relative">
    <img class="w-full h-64 object-cover" src="/a5.jpg"/>
   </div>
   <div class="relative">
    <img class="w-full h-64 object-cover" src="/a6.jpg"/>
   </div>
  </section>
        </>
    )
}
export default AboutTwo;