import styled from "styled-components";

export const Container = styled.section`
display: flex;
flex-direction: row;
justify-content: space-between;
width: 100%;
height: auto;
position: relative;
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
    & br { display: none; }
  }
}
`

export const Container__Introduction = styled.div`
width: 100%;
height: 308px;

  & > textarea { // 소개글 작성란
    width: 100%;
    height: 100%;
    background: #FDFBF8;
    border: 1px solid #E8D9D4;
    border-radius: 8px;
  }

@media screen and (max-width: 768px) { 
  height: 320px;
} 
`