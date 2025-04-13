import { useState } from 'react';
import { FaBars, FaSearch, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom';

function Navbar() {
    const [open, setOpen] = useState(false)

  
    return (
        <>
            <div className='bg-slate-100 shadow-lg '>
                <nav className='container mx-auto'>
                    <div className='flex justify-between p-3 items-center '>
                        <h1 className='text-3xl font-bold'>Nexava</h1>
                        <ul className='hidden md:flex space-x-6 uppercase text-gray-600'>
                            <li><Link to={"/"} className='hover:text-green-800'>home</Link></li>
                            <li><Link to={"/about"} className='hover:text-green-800'>about</Link></li>
                            <li><Link to={"/team"} className='hover:text-green-800'>team</Link></li>
                            <li><Link to={"/contact"} className='hover:text-green-800'>Contact</Link></li>
                            <li><Link to={"/faq"} className='hover:text-green-800'>Faq</Link></li>
                        </ul>
                        <div className='flex space-x-4 text-2xl'>
                            <FaSearch />
                            
                            <button onClick={() => { setOpen(!open) }} className='md:hidden'>
                                {(open) ? <FaTimes /> : <FaBars />}

                            </button>
                        </div>
                    </div>
                    {open && (
                        <ul className='md:hidden text-center space-y-4 uppercase pb-3 text-gray-600'>
                            <li><Link to={"/"} className='hover:text-green-800'>home</Link></li>
                            <li><Link to={"/about"} className='hover:text-green-800'>about</Link></li>
                            <li><Link to={"/team"} className='hover:text-green-800'>team</Link></li>
                            <li><Link to={"/contact"} className='hover:text-green-800'>Contact</Link></li>
                            <li><Link to={"/faq"} className='hover:text-green-800'>Faq</Link></li>
                        </ul>
                    )}

                </nav>
            </div>
        </>
    )
}
export default Navbar;