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
border-radius: 20px;

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
height: calc(9/16 * 100%);
border-top-left-radius: 20px;
border-top-right-radius: 20px;
object-fit: cover;
`

/* 카드 내용 */
export const Content = styled.div`
position: absolute;
top: calc(9/16 * 100%); // OR bottom: 0;
left: 0;
width: 100%;
height: calc(100% - (9/16 * 100%));
border-bottom-left-radius: 20px;
border-bottom-right-radius: 20px;
background-color: #FDFBF8;
color: #2C2C2C;
`
