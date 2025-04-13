import React from 'react'

function FirstSection() {
    

    return (
        <>
        <div style={{backgroundImage:"url('/first-bg.jpg')"}} className='bg-cover bg-center w-full h-screen relative flex flex-col justify-center items-center'>
            <div className="container">
                        <div className='text-white text-center lg:px-[220px]'><h1 className='font-semibold text-[80px]'>We Are Experts In Roof Repairs</h1>
                        <button className='bg-green-600 px-4 py-2 hover:bg-green-800'>Read More</button>
                        </div>
                    </div>
                </div>
        </>
    )
}
export default FirstSection;