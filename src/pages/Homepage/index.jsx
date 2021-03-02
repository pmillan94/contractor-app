import React from 'react';
import InfoSection from '../../components/Content/InfoSection';
import Hero from '../../components/HomeSlider/Hero';
import Footer from '../../components/Footer/Footer';
import { InfoData, InfoData2, ProjectsData } from '../../data/InfoData';
import { SliderData } from '../../data/SliderData';
import Projects from '../../components/Projects/Projects';
import RemodelSection from '../../components/Remodel/Remodel';

function Home() {
  return (
    <>
      <Hero slides={SliderData} />
      <InfoSection {...InfoData} />
      <Projects {...ProjectsData} />
      <RemodelSection {...InfoData2} />
      <Footer />
    </>
  );
}

export default Home;
