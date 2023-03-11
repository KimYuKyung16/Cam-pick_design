import styled from "styled-components";

export const Container = styled.section`
display: flex;
flex-direction: row;
width: 100%;
height: auto;
position: relative;
justify-content: space-between;
gap: 10px;

& > h2 {
  color: #2C2C2C;
  font-weight: 500;
  font-size: 1.6rem;
  white-space: nowrap;
  width: 250px;
}

@media screen and (max-width: 768px) { 
  flex-direction: column;
  gap: 4px;

  & > h2 {
    font-size: 1.2rem;
    width: 100%;

    & > br {
      display: none;
    }
  }
}
`

/* 모임 이름 입력창 */
export const Container__Name = styled.div`
display: flex;
flex-direction: row;
align-items: center;
width: 100%;
max-width: 1049px;
height: 44px;
background: #FDFBF8;
border: 1px solid #E8D9D4;
border-radius: 8px;
overflow: hidden;

& > input { // 이름 입력창
  background: #FDFBF8;
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
}

& > p { // 글자수
  font-size: 1.6rem;
  font-weight: 500;
  color: #A8A8A8;
  width: auto;
  padding: 12px;
  background: #FDFBF8;
}

@media screen and (max-width: 768px) { 
  border-radius: 4px;
  height: 28px;

  & > p { // 글자수
    font-size: 1.2rem;
    padding: 6px;
  }
} 
`