import styled from 'styled-components';

export const LogOutBtn = styled.button`
  display: inline-flex;
  justify-content: center;
  padding: 8px 10px;
  
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: color 250ms linear;
  :hover {
    color: orangered;
  }
`;

export const Usertext = styled.span`
  font-weight: 500;
  b {
    color: orangered;
  }
`;

export const UserConteiner = styled.div`
  display: flex;
  align-items: center;
`;