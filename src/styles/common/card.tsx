/**
 * 
 * 카드 스타일 정보
 */


import styled from "styled-components";

/* 카드 전체적인 틀 */
export const Component = styled.div`
position: relative;
width : 100%;
height: 100%;
background-color: #FDFBF8;
filter: drop-shadow(20px 20px 50px rgba(182, 58, 15, 0.16));
border-radius: 8px;
overflow: hidden;

&::before {
  content: "";
  padding-bottom: calc(369/387 * 100%); // 한 카드의 전체 비율
  display: block;
}
`

/* 카드 이미지 */
export const Img = styled.img`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: calc(9/15 * 100%);
/* border-top-left-radius: 20px;
border-top-right-radius: 20px; */
object-fit: cover;
`

/* 카드 내용 */
export const Content = styled.div`
position: absolute;
top: calc(9/15 * 100%); // OR bottom: 0;
left: 0;
width: 100%;
height: calc(100% - (9/15 * 100%));
/* border-bottom-left-radius: 20px;
border-bottom-right-radius: 20px; */
background-color: #FDFBF8;
color: #2C2C2C;


& > div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #FDFBF8;
  padding: 30px 28px;
  gap: 10px;

  & > p:nth-child(1) {
    color: #2C2C2C;
    font-size: 2.4rem;
    font-weight: 700;
    width: 100%;
  }

  & > p:nth-child(2), p:nth-child(3) {
    color: #2C2C2C;
    font-size: 1.8rem;
    font-weight: 500;
    & > span {
      color: #FF6F3D;
      font-weight: 700;
      margin-right: 10px;
    }
  }
}

@media screen and (max-width: 1250px) { // 여백 없어지는 부분부터
  & > div {
    padding: 2.87vw 2.68vw;
    gap: 0.957vw;

    & > p:nth-child(1) {
      font-size: 1.88vw;
    }

    & > p:nth-child(2), p:nth-child(3) {
      font-size: 1.4vw;
      & > span {
        margin-right: 0.957vw;
      }
    }
  }
} 

@media screen and (max-width: 768px) { 
  & > div {
    padding: 2.57vw 2.38vw;
    gap: 0.857vw;

    & > p:nth-child(1) {
      font-size: 2.58vw;
      /* zoom: 0.9; */
      /* transform: translate(-22%, -50%) scale(0.5);
      display: inline-block; */
    }

    & > p:nth-child(2), p:nth-child(3) {
      font-size: 2.1vw;
      zoom: 0.9;
      & > span {
        margin-right: 1.657vw;
        zoom: 0.9;
      }
    }
  }
} 

`
