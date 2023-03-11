import styled from "styled-components";

export const Container = styled.section`
display: flex;
flex-direction: row;
width: 100%;
height: auto;
position: relative;
gap: 20px;

@media screen and (max-width: 768px) { 
  flex-direction: column;
  gap: 16px;
}
`

/* 알림 내역 */
export const Container__List = styled.ul`
width: 100%;
height: auto;
background-color: #FDFBF8;
border: 1px solid #E8D9D4;
border-radius: 8px;
overflow: hidden;
list-style: none;

& > li { // 알림
  border-bottom: 1px solid #E8D9D4;
  padding: 16px;
}

@media screen and (max-width: 768px) {
  border-radius: 4px;
  
  & > li { padding: 8px; } // 알림
}
`

/* 알림 내역 */
export const Notification = styled.div`
display: flex;
flex-direction: column;
font-weight: 500;
gap: 10px;

& > p { // 알림 위치
  font-size: 1.2rem;
  color: #7A7A7A;
}

& > div { // 알림 내용
  color: #2C2C2C;
  font-size: 1.6rem;
  line-height: 130%;
}

@media screen and (max-width: 768px) {
  gap: 4px;

  & > p { // 알림 위치
    font-weight: 400;
    font-size: 0.8rem;
  }

  & > div { font-size: 1.2rem; } // 알림 내용
}
`
