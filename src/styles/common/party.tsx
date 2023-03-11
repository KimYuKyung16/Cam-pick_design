import styled from "styled-components";

export const Container = styled.section`
display: flex;
flex-direction: column;
width: 100%;
height: auto;
position: relative;
gap: 8px;

@media screen and (max-width: 768px) { 
  gap: 4px;
}
`

/* 모임 */
export const Container__Party = styled.div`
display: flex;
flex-direction: row;
align-items: center;
width: 100%;
height: auto;
background-color: #FDFBF8;
padding: 16px;
border: 1px solid #E8D9D4;
border-radius: 8px;
gap: 16px;

@media screen and (max-width: 768px) { 
  flex-direction: column;
  padding: 8px;
  gap: 12px;
} 
`

/* 모임 이미지 */
export const Container__Banner = styled.div`
width: 224px;
border-radius: 8px;
overflow: hidden;

& > div { // 이미지(배경화면)
  width: 100%;
  background: url( "/image/backtest.jpg" ) no-repeat 50% 50%;
  background-size: cover;
  padding-bottom: calc(9/16 * 100%);
}

@media screen and (max-width: 768px) { 
  width: 100%;
  border-radius: 10px;
} 
`

/* 모임 정보들 */
export const Container__Info = styled.div`
display: flex;
flex-direction: column;
width: calc(100% - 224px);
height: auto;
gap: 10px;

& > hr {
  width: 100%;
  height: 1px;
  background-color: #D9D9D9;
  border: none;
}

@media screen and (max-width: 768px) { 
  width: 100%;
  position: relative;
  gap: 8px;
} 
`

/* 모임 이름 & 태그 & 하트찜 */
export const Container__Info_name_tag = styled.div`
display: flex;
flex-direction: row;
align-items: center;
width: 100%;
gap: 16px;

& > h3 {
  color: #2C2C2C;
  font-size: 2.2rem;
  white-space: nowrap;
}

& > div { // 태그들
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  gap: 8px;
  overflow: auto; 

  & > input { // 태그
    background: #FF6F3D;
    color: #FDFBF8;
    font-weight: 700;
    font-size: 1.8rem;
    padding: 8px 16px;
    border: none;
    border-radius: 8px;
  }
} 

@media screen and (max-width: 768px) { 
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  
  & > h3 {
    font-size: 1.6rem;
  }

  & > div { // 태그들
    gap: 4px;

    & > input { // 태그
      font-size: 1rem;
      padding: 4px 12px;
      border-radius: 4px;
    }
  }
} 
`

/* 하트 아이콘 : 마이페이지 - 모임 좋아요 목록*/
export const Like_Icon = styled.div`
margin-left: auto;

& > img {
  height: 36px;
  filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.15));
}

@media screen and (max-width: 768px) { 
  position: absolute;
  top: 0;
  right: 0;

  & > img {
    height: 17.67px;
  }
} 
`

/* 수정/삭제 아이콘 : 마이페이지 - 모임목록 */
export const Revise_Delete_Btn = styled.div`
margin-left: auto;

& input {
  font-size: 0.5rem !important;
}

@media screen and (max-width: 768px) { 
  position: absolute;
  top: 0;
  right: 0;

  & input {
    padding: 2px 3px !important;
  }
} 
`

/* 모집 인원 & 모집 기간 & 소개글 */
export const Container__Info_personnel_period_introduction = styled.div`
display: flex;
flex-direction: row;
width: 100%;
height: 100%;
gap: 16px;

@media screen and (max-width: 768px) { 
flex-direction: column;
height: auto;
gap: 10px;
} 
`

/* 모집 인원 & 모집 기간 */
export const Personnel_Period = styled.div`
display: flex;
flex-direction: column;
gap: 6px;

& > div {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 7px;
  
  & > input { // 라벨
    background-color: #FDFBF8;
    color: #FF6F3D;
    font-weight: 700;
    font-size: 1.4rem;
    padding: 4px 8px;
    border: 1px solid #FF6F3D;
    border-radius: 100px;
  }

  & > p { // 라벨 내용
    color: #2C2C2C;
    font-size: 1.4rem;
    font-weight: 500;
    white-space: nowrap;
  }
}

@media screen and (max-width: 768px) { 
  gap: 5px;

  & > div {
    gap: 5px;

    & > input { // 라벨
      font-size: 1.2rem;
      padding: 2px 6px;
    }

    & > p {  font-size: 1.2rem; } // 라벨 내용
  }
} 
`

/* 소개글 */
export const Introduction = styled.div`
background-color: #FFEFE9;
width: 100%;
height: auto;
font-size: 1.4rem;

@media screen and (max-width: 768px) { 
  min-height: 80px;
  font-size: 1.2rem;
} 
`
