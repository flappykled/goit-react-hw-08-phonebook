import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: medium;
  padding: 50px 40px;
`;

export const FormInput = styled.input`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  padding: 8px;
  font-size: medium;
  text-align: left;
  color: white;
  background-color: orangered;
  border: 1px solid black;
  border-radius: 5px;
  transition: border-color 250ms linear, color 250ms linear, background-color 250ms linear;
  :hover,
  :focus {
    cursor: pointer;
    border-color: orangered;
    color: orangered;
    background-color: white;
  }
  :-webkit-autofill {
    transition: background-color 250s linear;
  }
  @media screen and (min-width: 480px) {
    width: 300px;
  }
  @media screen and (min-width: 768px) {
    width: 400px;
  }
`;

export const FormBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  margin-top: 16px;
  margin-bottom: 32px;
  margin-left: 8px;
  margin-right: 6px;
  padding: 8px 16px;
  font-size: medium;
  line-height: 20px;
  border: none;
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

export const Contactabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;