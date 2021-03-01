import React from 'react';
import InfoSection from '../../components/Content/InfoSection';
import Hero from '../../components/HomeSlider/Hero';
import Footer from '../../components/Footer/Footer';
import { InfoData } from '../../data/InfoData';
import { SliderData } from '../../data/SliderData';

function Home() {
  return (
    <>
      <Hero slides={SliderData} />
      <InfoSection {...InfoData} />
      <Footer />
    </>
  );
}

export default Home;
