import React from 'react'
import Navbar from '../components/Navbar'
import TeamOneSection from '../components/Team/TeamOneSection';
import TeamTwoSection from '../components/Team/TeamTwoSection';
import Footer from "../components/Footer"
function Team() {


    return (
        <>
            <Navbar />
            <TeamOneSection/>
            <TeamTwoSection/>
            <Footer/>
        </>
    )
}
export default Team