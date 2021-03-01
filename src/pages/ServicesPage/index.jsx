import React from 'react';
import Footer from '../../components/Footer/Footer';
import Hero from '../../components/HomeSlider/Hero';
import { ServicesData } from '../../data/SliderData';

const Services = () => {
  return (
    <>
      <Hero slides={ServicesData} />
      <Footer />
    </>
  );
};

export default Services;
