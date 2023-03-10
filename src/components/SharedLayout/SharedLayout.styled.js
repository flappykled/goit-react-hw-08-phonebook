import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  padding: 10px 40px;
  color: black;
  font-weight: 400;
  font-size: 12px;
  text-align: center;
  @media screen and (min-width: 480px) {
    width: 480px;
    font-size: 15px;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
  }
  @media screen and (min-width: 1200px) {
    width: 1200px;
  }
`;