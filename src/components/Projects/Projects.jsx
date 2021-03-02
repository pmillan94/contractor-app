import React, { useEffect, useState } from 'react';
import { Button } from '../Button';
import {
  ProjectsSection,
  ProjectsHeading,
  ProjectsContainer,
  ColProjectsLeft,
  ProjectImgL,
  ProjectImgR,
  Arrow,
  ProjectTitle,
  ColProjectsRight,
} from './ProjectsElem';

const Projects = ({
  image,
  title,
  alt,
  label,
  reverse,
  image2,
  title2,
  alt2,
}) => {
  const [showAnime, setShowAnime] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 1100) {
      setShowAnime(true);
    } else {
      setShowAnime(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <ProjectsSection>
      <ProjectsHeading
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: showAnime ? 1 : 0, x: showAnime ? 0 : -100 }}
        transition={{ duration: 2 }}
      >
        <h1>View our newest projects</h1>
      </ProjectsHeading>
      <ProjectsContainer>
        <ColProjectsLeft>
          <ProjectImgR
            src={image}
            alt={alt}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: showAnime ? 1 : 0, y: showAnime ? 0 : 100 }}
            transition={{ duration: 2 }}
          />
          <ProjectTitle>{title}</ProjectTitle>
          <Button to="/works" pad="true">
            {label}
            <Arrow />
          </Button>
        </ColProjectsLeft>
        <ColProjectsRight>
          <ProjectImgL
            src={image2}
            alt={alt2}
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: showAnime ? 1 : 0, y: showAnime ? 0 : -100 }}
            transition={{ duration: 2 }}
          />
          <ProjectTitle>{title2}</ProjectTitle>
          <Button to="/works" pad="true">
            {label}
            <Arrow />
          </Button>
        </ColProjectsRight>
      </ProjectsContainer>
    </ProjectsSection>
  );
};

export default Projects;
