import styled from 'styled-components';

export const FilterWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const FilterName = styled.input`
  margin-bottom: 20px;
  padding: 8px;
  font-size: medium;
  text-align: left;
  color: white;
  background-color: orangered;
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;
  transition: border-color 250ms linear, color 250ms linear, background-color 250ms linear;
  :hover,
  :focus {
    border-color: orangered;
    color: orangered;
    background-color: white;
  }
  @media screen and (min-width: 480px) {
    width: 300px;
  }
  @media screen and (min-width: 768px) {
    width: 200px;
  }
  @media screen and (min-width: 1200px) {
    width: 400px;
  }
`;

export const FilterStyle = styled.label`
  font-size: medium;
  margin-bottom: 5px;
`;