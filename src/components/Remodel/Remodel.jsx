// import React, { useEffect, useState } from 'react';
import React, { useEffect, useState } from 'react';
import {
  Section,
  Container,
  ColumnLeft,
  ColumnRight,
  ColumnH1,
  Columnp,
} from './RemodelElem';
import { Button } from '../Button';

const RemodelSection = ({
  heading,
  paragraph1,
  paragraph2,
  label,
  image,
  reverse,
}) => {
  //create var to handle scroll
  const [showAnime, setShowAnime] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 1800) {
      setShowAnime(true);
    } else {
      setShowAnime(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <Section>
      <Container>
        <ColumnLeft>
          <ColumnH1
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: showAnime ? 1 : 0, x: showAnime ? 0 : -100 }}
            transition={{ duration: 2 }}
          >
            {heading}
          </ColumnH1>
          <Columnp
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: showAnime ? 1 : 0, x: showAnime ? 0 : -100 }}
            transition={{ duration: 2 }}
          >
            {paragraph1}
          </Columnp>
          <Columnp
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: showAnime ? 1 : 0, x: showAnime ? 0 : -100 }}
            transition={{ duration: 2 }}
          >
            {paragraph2}
          </Columnp>
          <Button to="/homes" primary="true">
            {label}
          </Button>
        </ColumnLeft>
        <ColumnRight
          reverse={reverse}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: showAnime ? 1 : 0, x: showAnime ? 0 : 100 }}
          transition={{ duration: 2 }}
        >
          <img src={image} alt="home" />
        </ColumnRight>
      </Container>
    </Section>
  );
};

export default RemodelSection;
