import React from 'react'
const Furniture = [
    {
        id: 1,
        name: "Roof Repair",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident consequuntur, error modi similique perspiciatis fugiat."
    },
    {
        id: 2,
        name: "Green Flashing Repair",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident consequuntur, error modi similique perspiciatis fugiat."
    },
    {
        id: 3,
        name: "Roofing Services",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident consequuntur, error modi similique perspiciatis fugiat."
    },
    {
        id: 4,
        name: "Roof Inspection",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident consequuntur, error modi similique perspiciatis fugiat."
    },
    {
        id: 5,
        name: "Roof Inspection",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident consequuntur, error modi similique perspiciatis fugiat."
    },
    {
        id: 4,
        name: "Roof Inspection",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident consequuntur, error modi similique perspiciatis fugiat."
    },
]
function FourSection() {


    return (
        <>
            <div className='bg-gray-100'>
                <div className='py-12 mx-[120px]'>
                    <p className='my-3 text-green-600'>EVENT TIME</p>
                    <h1 className='text-4xl font-semibold'>Quality Roofing Solutions <br />The Every Time</h1>
                </div>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 lg:text-start text-center space-y-5 space-x-3 mx-[120px] py-9'>
                    {Furniture.map((items) => (
                        <div className='p-4 bg-slate-100 rounded-lg shadow-lg space-y-2'>
                            <h1 className='text-3xl font-semibold'>{items.name}</h1>
                            <p className='text-lg  text-[15px]'>{items.para}</p>
                            <button className='text-gray-600 p-3 hover:text-gray-800'>Read More </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default FourSection;