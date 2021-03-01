// import React, { useEffect, useState } from 'react';
import React from 'react';
import { Section, Container, ColumnLeft, ColumnRight } from './InfoElem';
import { Button } from '../Button';

const InfoSection = ({
  heading,
  paragraph1,
  paragraph2,
  label,
  image,
  reverse,
}) => {
  //create var to handle scroll
  // const [scroll, setScroll] = useState(false);

  // const activateAnimation = () => {
  //   if (window.scrollY >= 1080) {
  //     setScroll(true);
  //   } else {
  //     setScroll(false);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener('scroll', activateAnimation);
  // }, []);

  return (
    <Section>
      <Container>
        <ColumnLeft>
          <h1>{heading}</h1>
          <p>{paragraph1}</p>
          <p>{paragraph2}</p>
          <Button to="/homes" primary="true">
            {label}
          </Button>
        </ColumnLeft>
        <ColumnRight
          reverse={reverse}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1 } }}
        >
          <img src={image} alt="home" />
        </ColumnRight>
      </Container>
    </Section>
  );
};

export default InfoSection;
