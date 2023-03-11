import styled from "styled-components";

export const Container = styled.section`
display: flex;
flex-direction: row;
width: 100%;
height: auto;

& > input {
  width: 100%;
  background: #FDFBF8;
  color: #2C2C2C;
  font-weight: 500;
  font-size: 1.6rem;
  text-align: left;
  padding: 16px;
  border: 1px solid #E8D9D4;
  border-radius: 8px;
}

@media screen and (max-width: 768px) { 
  & > input {
    font-size: 1.2rem;
    padding: 8px;
  }
}
`