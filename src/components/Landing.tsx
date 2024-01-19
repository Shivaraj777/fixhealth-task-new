import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import BookingForm from './BookingForm';

function Landing(props: any) {
  
  return (
    <>
      <Header />
      <HeroSection />
      <BookingForm />
    </>
  )
}

export default Landing;