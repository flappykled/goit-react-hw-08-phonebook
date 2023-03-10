import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const ContactsList = styled.ul`
  margin: 0;
  margin-top: 10px;
  padding: 0;
  list-style: none;
`;

export const ContactsBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 36px;
  width: 71px;
  font-size: small;
  border-radius: 5px;
  color: white;
  background-color: orangered;
  border: 1px solid white;
  cursor: pointer;
  transition: border-color 250ms linear, color 250ms linear, background-color 250ms linear;
  :hover {
    border-color: orangered;
    color: orangered;
    background-color: white;
  }
`;

export const ContactsCallBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 36px;
  width: 71px;
  margin-left: 8px;
  font-size: small;
  border-radius: 5px;
  color: white;
  background-color: orangered;
  border: 1px solid white;
  cursor: pointer;
  transition: border-color 250ms linear, color 250ms linear, background-color 250ms linear;
  :hover {
    border-color: orangered;
    color: orangered;
    background-color: white;
  }
`;

export const ContactsLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 34px;
  width: 71px;
  font-size: small;
  border-radius: 5px;
  color: white;
  background-color: orangered;
  border: 1px solid white;
  text-decoration: none;
  transition: border-color 250ms linear, color 250ms linear, background-color 250ms linear;
  :hover {
    border-color: orangered;
    color: orangered;
    background-color: white;
  }
`;

export const ContactsItem = styled.li`
  align-items: center;
  font-size: large;
  justify-content: space-between;
  @media screen and (min-width: 480px) {
    display: flex;
  }
`;

export const ContactNotFound = styled.p`
  color: rgba(209, 72, 17);
  margin-top: 17px;
`;

export const ContactsText = styled.p`
  display: flex;
  align-items: center;
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;