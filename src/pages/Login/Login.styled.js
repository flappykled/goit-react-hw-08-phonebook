import styled from 'styled-components';

export const ContainerLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  color: rgb(44, 43, 43);
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px 40px;
  font-size: medium;
`;

export const LoginFormInput = styled.input`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  margin-bottom: 20px;
  padding: 8px;
  font-size: medium;
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

export const LoginFormBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  margin-top: 16px;
  margin-bottom: 32px;
  margin-left: 8px;
  margin-right: 6px;
  padding: 8px 16px;
  border: none;
  border-radius: 5px;
  color: white;
  background-color: orangered;
  border: 1px solid white;
  font-size: medium;
  line-height: 20px;
  cursor: pointer;
  transition: border-color 250ms linear, color 250ms linear, background-color 250ms linear;
  :hover {
    border-color: orangered;
    color: orangered;
    background-color: white;
  }
`;

export const LoginLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;