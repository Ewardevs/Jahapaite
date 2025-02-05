import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import TravelSection from '../components/TravelSection'
import TestimonialSection from '../components/TestimonialSection'
import FormSection from '../components/FormSection'
import WhatsappIcon from '../components/sections/WhatsappIcon'

function Home() {
  return (
    <div className="">
        <Navbar/>
        <Hero />
        <TravelSection/>
        <TestimonialSection/>
        <FormSection/>

        <WhatsappIcon/>

    </div>
  )
}

export default Home