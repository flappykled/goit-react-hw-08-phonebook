import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  display: inline-flex;
  text-align: center;
  align-items: center;
  gap: 4px;
  padding: 8px 0;
  margin-bottom: 20px;
  
  color: black;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;
  transition: color 250ms linear;
  :hover {
    color: orangered;
  }
`;