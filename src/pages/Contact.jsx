import React from 'react'
import Navbar from '../components/Navbar'
import ContactOne from '../components/Contact/ContactOne';
import ContactTwo from '../components/Contact/ContactTwo';
import Footer from '../components/Footer'
function Contact() {


    return (
        <>
            <Navbar />
            <ContactOne />
            <ContactTwo/>
            <Footer/>
        </>
    )
}
export default Contact;