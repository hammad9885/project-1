import React from 'react'
import Navbar from '../components/Navbar'
import FirstSection from '../components/Home/FirstSection';
import SecondSection from '../components/Home/SecondSection';
import ThirdSection from '../components/Home/thirdSection';
import FourSection from '../components/Home/FourSection';
import FiveSection from '../components/Home/FiveSection';
import SixSection from '../components/Home/SixSection';
import SevenSection from '../components/Home/SevenSection'
import EightSection from '../components/Home/EightSection'
import Footer from '../components/Footer'
function Home() {


    return (
        <>
            <Navbar />
            <FirstSection />
            <SecondSection/>
            <ThirdSection/>
            <FourSection/>
            <FiveSection/>
            <SixSection/>
            <SevenSection/>
            <EightSection/>
            <Footer/>
        </>
    )
}
export default Home;