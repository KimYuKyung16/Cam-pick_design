/**
 * 커뮤니티 상세글 : 게시글 내용 스타일
 * 
 */

import styled from "styled-components";

export const Container = styled.main`
width: 100%;
max-width: 1200px;
border-radius: 12px;
overflow: hidden;
`

export const Container__Header = styled.div`
display: flex;
flex-direction: row;
width: 100%;
background-color: #FDFBF8;
padding: 24px 16px;
border-bottom: 1px solid #A8A8A8;
`

/* 게시글 정보 */
export const Container__Title = styled.div`
display: flex;
flex-direction: column;
width: 90%;
`

/* 구분 / 제목 */
export const Category_Title = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: center;
padding-bottom: 13px;
gap: 1%;

& > p { // 구분
color: #3491FE;
font-weight: 500;
font-size: 1.6rem;
line-height: 130%;
}

& > h2 { // 제목
color: #000000;
font-weight: 700;
font-size: 1.8rem;
line-height: 21px;
}
`

/* 글쓴이 / 날짜 */
export const Writer_Date = styled.div`
display: flex;
flex-direction: row;
align-items: center;
gap: 8px;

& > p { // 글쓴이 / 날짜
  color: #7A7A7A;
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 14px;
}

& > hr { // 선
  width: 1px;
  height: 80%;
}
`

/* 내용 */
export const Container__Content = styled.div`
width: 100%;
height: 400px;
background: #FDFBF8;
padding: 16px;
border: none;
`