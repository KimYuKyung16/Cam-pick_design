import styled from "styled-components";

export const Container = styled.section`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
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
  }
}
`

/* 기간 설정 */
export const Container__Period = styled.div`
display: flex;
flex-direction: row;
align-items: center;
width: 100%;
gap: 8px;

& > input { // 날짜
  width: 164px;
  height: 44px;
  background: url( "/image/calendar_icon.svg" ) no-repeat 90% center;
  background-size: 25px;
  background-color: #FDFBF8;
  color: #A8A8A8;
  font-weight: 600;
  font-size: 1.8rem;
  padding: 8px;
  border: 1px solid #E8D9D4;
  border-radius: 8px;
  position: relative;

  ::-webkit-clear-button
  ::-webkit-inner-spin-button { display: none; appearance: none;} // 달력 아이콘 없애기 & 전체 클릭 가능
  ::-webkit-calendar-picker-indicator {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: transparent; // 달력 아이콘 없애기
    color: transparent;
    cursor: pointer;

    -webkit-appearance: none;
  }
}

@media screen and (max-width: 768px) { 

  & > input { // 날짜
    width: 113px;
    height: 28px;
    background-size: 15px;
    font-size: 1.2rem;
    border-radius: 4px;
  }

  & > p {
    font-weight: 500;
    font-size: 1.8rem;
  }
}
`
