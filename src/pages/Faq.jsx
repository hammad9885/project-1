import React from 'react'
import Navbar from '../components/Navbar';
import FaFirstSection from '../components/Faq/FaFirstSection';
import FaThirdSection from '../components/Faq/FaThirdSection';
import FaSecondSection from '../components/Faq/FaSecondSection';
import Footer from '../components/Footer';

function Faq() {
    

    return (
        <>
            <Navbar/>
            <FaFirstSection/>
            <FaSecondSection/>
            <FaThirdSection/>
            <Footer/>
        </>
    )
}
export default Faq;