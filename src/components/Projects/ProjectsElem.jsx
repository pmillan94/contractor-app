import styled from 'styled-components';
import { IoMdArrowRoundForward } from 'react-icons/io';
import { motion } from 'framer-motion';

export const ProjectsSection = styled.section`
  /* background-color: grey; */
  width: 100%;
  height: 100%;
  padding: 4rem 0rem;
`;
export const ProjectsHeading = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  width: 90%;
  margin: auto;
  h1 {
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
    @media screen and (max-width: 768px) {
      width: 90%;
      margin: auto;
    }
  }
`;
export const ProjectsContainer = styled.div`
  padding: 1rem calc((100vw - 1000px) / 2);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 500px;
  grid-column-gap: 3rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 400px;
    padding: 1rem;
  }
`;

export const ColProjectsLeft = styled.div`
  /* background-color: pink; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  /* line-height: 1.4; */
`;

export const ColProjectsRight = styled.div`
  /* background-color: yellow; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media screen and (max-width: 768px) {
    align-items: flex-end;
  }
`;

export const ProjectImgL = styled(motion.img)`
  object-fit: cover;
  width: 90%;
  height: 20rem;
  padding-bottom: 1rem;
  margin-top: 5rem;
`;
export const ProjectImgR = styled(motion.img)`
  object-fit: cover;
  width: 90%;
  height: 20rem;
  padding-bottom: 1rem;
`;

export const ProjectTitle = styled.p`
  margin-bottom: 1rem;
  font-size: clamp(1rem, 2.5vw, 1.5rem);
`;

export const Arrow = styled(IoMdArrowRoundForward)`
  margin-left: 0.5rem;
`;
