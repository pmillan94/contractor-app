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
        <ColumnRight reverse={reverse}>
          <img src={image} alt="home" />
        </ColumnRight>
      </Container>
    </Section>
  );
};

export default InfoSection;
