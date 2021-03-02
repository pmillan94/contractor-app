import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 4rem 0rem;
  background-color: #000;
`;

export const Container = styled.div`
  padding: 3rem calc((100vw - 100%) / 2);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 800px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 550px;
  }
`;

export const ColumnLeft = styled.div`
  background-color: #fff;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex;
  line-height: 1.4;
  padding: 1rem 0rem 1rem 8rem;
  order: ${({ reverse }) => (reverse ? '2' : '1')};
`;

export const ColumnH1 = styled(motion.h1)`
  margin-bottom: 1rem;
  font-size: clamp(1.5rem, 6vw, 2rem);
`;

export const Columnp = styled(motion.p)`
  margin-bottom: 2rem;
`;

export const ColumnRight = styled(motion.div)`
  order: ${({ reverse }) => (reverse ? '1' : '2')};
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media screen and (max-width: 768px) {
    order: ${({ reverse }) => (reverse ? '2' : '1')};
  }
  img {
    width: 100%;
    height: 32rem;
    object-fit: cover;

    @media screen and (max-width: 768px) {
      margin: auto;
      width: 90%;
      height: 90%;
    }
  }
`;
