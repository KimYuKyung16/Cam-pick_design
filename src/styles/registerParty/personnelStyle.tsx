import styled from "styled-components";

export const Container = styled.section`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
width: 100%;
height: auto;
gap: 10px;

& > h2 {
  width: 250px;
  color: #2C2C2C;
  font-weight: 500;
  font-size: 1.6rem;
  white-space: nowrap;
}

@media screen and (max-width: 768px) { 
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;

  & > h2 {
    font-size: 1.2rem;
  }
}
`

export const Container__Personnel = styled.div`
width: 100%;
display: flex;
flex-direction: row;
align-items: center;
gap: 8px;

& > input {
  border: none;
  width: 67px;
  height: 44px;
  color: #A8A8A8;
  font-weight: 500;
  font-size: 1.8rem;
  border: 1px solid #E8D9D4;
  border-radius: 8px;
  padding: 0 8px;
}

& > p {
  font-weight: 500;
  font-size: 1.8rem;
  color: #2C2C2C;
}

@media screen and (max-width: 768px) { 
  gap: 4px;

  & > input {
    width: 45px;
    height: 28px;
    font-size: 1.2rem;
  }

  & > p {
    font-size: 1.2rem;
  }
} 
`
