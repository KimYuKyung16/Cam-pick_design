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
gap: 24px;

& > h1 {
  color: #000000;
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 29px;
  /* padding-bottom: 24px; */

  & > span:last-child { // 모바일용 제목
    display: none;
  }
}

@media screen and (max-width: 768px) { 
  gap: 10px;

  & > h1 {
    font-size: 1.6rem;

    & > span:first-child { // PC용 제목
      display: none;
    }

    & > span:last-child { // 모바일용 제목
      display: block;
    }
  }
} 
`

export const Container__PopularPost = styled.div`
display: flex;
flex-direction: row;
gap: 20px; // pc일 땐 2개로 나눠짐.
overflow: hidden;
border-radius: 12px;
width: 100%;

@media screen and (max-width: 768px) { 
  flex-direction: column;
  border-radius: 4px;
  gap: 0; // 모바일일 땐 1개로 합침.

  & > :nth-last-child(2) { //6~10위 제거
    display: none;
  }
}
`

/* 각 인기글(2개): 1~5위, 6~10위 */
export const Popular_Post = styled.table`
width: 100%;
/* max-width: 200px; */
height: 265px;
border-collapse: collapse;
background-color: #FDFBF8;
border-radius: 12px;
font-size: 1.6rem;
font-weight: 500;
table-layout : fixed;

& tr {
border-bottom: 1px solid #E8E8E8;
width: 100%;

  :last-child {
    border: none;
  }
}

& td {
  text-align: center;
}

& td:nth-child(1) { // 번호
  width: 8%;
  white-space: nowrap;
}

& td:nth-child(2) { // 구분
  width: 8%;
  color: #58BF3E;
  white-space: nowrap;
}

& td:nth-child(3) { // 제목
  width: 84%;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; // 말줄임
  padding: 0 10px;
}

& td:nth-child(4) { // 댓글
  display: none;
  white-space: nowrap;
  color: #e80f0f;
}

@media screen and (max-width: 768px) { 
  height: 140px;
  border-radius: 0;
  font-size: 1rem;

  & td:nth-child(1) { // 번호
    width: 6%;
    white-space: nowrap;
  }

  & td:nth-child(2) { // 구분
    width: 6%;
    color: #58BF3E;
    white-space: nowrap;
  }

  & td:nth-child(3) { // 제목
    width: 79%;
    padding: 0 8px;
  }

  & td:nth-child(4) { // 댓글
    display: table-cell;
    width: 9%;
    text-align: left;
  }
}
`
