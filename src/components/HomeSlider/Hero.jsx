import React, { useState, useRef, useEffect } from 'react';
import { Button } from '../Button';
import { motion } from 'framer-motion';
import {
  HeroSection,
  HeroWrapper,
  HeroSlide,
  HeroSlider,
  HeroImage,
  HeroContent,
  Arrow,
  BtnWrapper,
  SliderButtons,
  PrevArrow,
  NextArrow,
} from './SliderElements';

const Hero = ({ slides }) => {
  //create objects
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const timeout = useRef(null);

  //create func to loop through the slides
  useEffect(() => {
    const nextSlide = () => {
      setCurrent(current => (current === length - 1 ? 0 : current + 1));
    };
    //timeout every 3secs
    timeout.current = setTimeout(nextSlide, 6000);
    return function () {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [current, length]);

  //func to handle slider next arrow
  const nextSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length < +0) {
    return null;
  }

  //animation styling
  const fadeDown = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div>
      <HeroSection>
        <HeroWrapper>
          {slides.map((slide, index) => {
            return (
              <HeroSlide key={index}>
                {index === current && (
                  <HeroSlider>
                    <HeroImage src={slide.image} alt={slide.alt} />
                    <HeroContent>
                      <motion.h1
                        variants={fadeDown}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 1 }}
                      >
                        {slide.title}
                      </motion.h1>
                      <motion.p
                        variants={fadeDown}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.5 }}
                      >
                        {slide.price}
                      </motion.p>
                      <BtnWrapper
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 1 } }}
                      >
                        <Button
                          to={slide.path}
                          primary="true"
                          css={`
                            max-width: 160px;
                          `}
                        >
                          {slide.label}
                          <Arrow />
                        </Button>
                      </BtnWrapper>
                    </HeroContent>
                  </HeroSlider>
                )}
              </HeroSlide>
            );
          })}
          <SliderButtons>
            <PrevArrow onClick={prevSlide} />
            <NextArrow onClick={nextSlide} />
          </SliderButtons>
        </HeroWrapper>
      </HeroSection>
    </div>
  );
};

export default Hero;
