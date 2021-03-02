import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled(Link)`
  background: ${({ primary }) => (primary ? '#000d1a' : 'transparent')};
  white-space: nowrap;
  border: none;
  min-width: 100px;
  max-width: 160px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ pad }) => (pad ? '0px 0px' : '14px 24px')};
  color: ${({ primary }) => (primary ? '#fff' : '#000d1a')};
  font-size: ${({ big }) => (big ? '16px' : '14px')};

  &:hover {
    transform: translateY(-2px);
  }
`;
