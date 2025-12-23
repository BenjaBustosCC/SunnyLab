import React from 'react'
import { Element } from "react-scroll";
import Hero from '../Hero/Hero'
import Carousel from '../Carousel/Carousel'
import Services from '../Services/Services'
import TechnicalSpecs from '../TechnicalSpecs/TechnicalSpecs'
import ContactForm from '../ContactForm/ContactForm'
import SocialMediaCard from '../SocialMediaCard/SocialMediaCard'

const LandingPage = () => {
    return (
        <>
            <Element name="hero" className="element-container" style={{ paddingTop: '130px' }}>
                <Hero />
                <Carousel />
            </Element>

            <Element name="services" className="element-container">
                <Services />
            </Element>

            <Element name="technical-specs" className="element-container">
                <TechnicalSpecs />
            </Element>

            <Element name="contact" className="element-container">
                <ContactForm />
                <SocialMediaCard
                    name="SunnyLab"
                    userName="sunnylab.cl"
                    instagram="https://www.instagram.com/sunnylab.cl"
                    youtube="https://www.youtube.com/@sunnylab.cl"
                    tiktok="https://www.tiktok.com/@sunnylab.cl"
                    spotify="https://open.spotify.com/intl-es/artist/5vhJr6XGIQ5CA7Ub5pVLjj"
                />
            </Element>
        </>
    )
}

export default LandingPage
