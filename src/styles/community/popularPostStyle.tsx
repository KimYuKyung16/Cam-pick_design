/**
 * 커뮤니티 인기글 스타일
 * 
 */

 import styled from "styled-components";

 export const Container = styled.section`
 display: flex;
 flex-direction: column;
 width: 100%;
 max-width: 1119px;
 
 & > h1 {
   color: #000000;
   font-weight: 700;
   font-size: 2.4rem;
   line-height: 29px;
   padding-bottom: 24px;
 }
 `
 
 export const Container__PopularPost = styled.div`
 display: flex;
 flex-direction: row;
 gap: 20px; // pc일 땐 2개로 나눠짐.
 
 @media screen and (max-width: 768px) { 
   flex-direction: column;
   gap: 0; // 모바일일 땐 1개로 합침.
 }
 `
 
 /* 각 인기글(2개): 1~5위, 6~10위 */
 export const Popular_Post = styled.table`
 width: 100%;
 height: 265px;
 border-collapse: collapse; 
 background-color: #FDFBF8;
 border-radius: 12px;
 font-size: 1.6rem;
 line-height: 130%;
 font-weight: 500;

 & tr {
   border-bottom: 1px solid #E8E8E8;
 
   :last-child {
     border: none;
   }
 }
 
 & td {
   padding: 15px;
   text-align: center;
 }
 
 & td:nth-child(1) { // 번호
   width: auto;
   white-space: nowrap;
 }
 
 & td:nth-child(2) { // 구분
   color: #58BF3E;
   white-space: nowrap;
   width: auto;
 }
 
 & td:nth-child(3) { // 제목
   width: 100%;
   text-align: left;
   white-space: nowrap;
   // 나중에 제목 길이에 다른 말줄임 추가 필요
 }
 `
 