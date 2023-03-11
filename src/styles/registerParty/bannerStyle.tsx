import styled from "styled-components";

export const Container = styled.section`
display: flex;
flex-direction: row;
justify-content: space-between;
width: 100%;
height: auto;
gap: 10px;
position: relative;

& > h2 {
  color: #2C2C2C;
  font-weight: 500;
  font-size: 1.6rem;
  white-space: nowrap;
  width: 250px;
}

@media screen and (max-width: 768px) { 
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;

  & > h2 {
    font-size: 1.2rem;
    & > br, span { display: none; }
  }
}
`

export const Container__Banner = styled.div`
display: flex;
flex-direction: row;
width: 100%;
height: 286px;
gap: 16px;

& > img { // 이미지
  width: 100%;
  height: 286px;
  border-radius: 8px;
}

& > div { // 이미지 관련 버튼
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  width: 50%;
  height: auto;
  gap: 8px;

  & > input:first-child{ // 이미지 찾기 버튼
    width: 126px;
    height: 41px;
    background: #FDFBF8;
    color: #7A7A7A;
    border: 1px solid #E8D9D4;
    border-radius: 8px;
   }

   & > input:last-child{ // 이미지 삭제 버튼
    width: 80px;
    height: 41px;
    background: #FDFBF8;
    color: #7A7A7A;
    border: 1px solid #E8D9D4;
    border-radius: 8px;
   }
}

@media screen and (max-width: 768px) { 
  flex-direction: column;

  & > div { // 이미지 관련 버튼
    width: 100%;
    justify-content: flex-end;

    & > input:first-child {
      width: 71px;
      height: 24px;
      font-size: 1.2rem;
      border-radius: 4px;
    }

    & > input:last-child{ // 이미지 삭제 버튼
      width: 37px;
      height: 24px;
      font-size: 1.2rem;
      border-radius: 4px;
    }
  }
}
`