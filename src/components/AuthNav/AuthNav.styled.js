import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 5px;
  border: 1px solid transparent;
  text-decoration: none;
  color: black;
  font-weight: 500;
  transition: border-color 250ms linear, color 250ms linear, background-color 250ms linear;
  &.active {
    border-color: orangered;
    color: orangered;
    background-color: white;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: orangered;
  }
`;