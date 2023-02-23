/**
 * 커뮤니티 게시판 리스트 스타일
 * 
 */

import styled from "styled-components";

export const Container = styled.main`
display: flex;
flex-direction: column;
width: 100%;
max-width: 1119px;
margin-bottom: 78px;

& > h1 {
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 29px;
  color: #000000;
  padding-bottom: 24px;
}
`

/* 게시판 메뉴 */
export const Container__Menu = styled.section`
display: flex;
flex-direction: row;
width: 100%;
height: 60px;
justify-content: space-between;

& > input { // 글쓰기 버튼
  width: 10%;
  background-color: #FE6834;
  color: #FDFBF8;
  border-radius: 12px;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 19px;
  border: none;
  cursor: pointer;
}
`

/* 게시글 검색 */
export const Container__Search = styled.div`
display: flex;
flex-direction: row;
background-color: beige;
width: 88%;
border-radius: 12px;
overflow: hidden;

& > img { // 검색 아이콘
  height: 100%;
  background-color: #FDFBF8;
  padding: 10px;
}

& > input { // 검색창
  width: 100%;
  background-color: #FDFBF8;
  color: #7A7A7A;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 19px;
  border: none;
  outline: none;
}
`

/* 게시글 필터링 */
export const Container__Filter = styled.section`
display: flex;
flex-direction: row;
overflow: auto; // 메뉴 넘치면 스크롤: pc화면인데 넘칠 경우 생각해봐야함. 모바일일 땐 ok
padding: 24px 0 22px 0;
gap: 2%;

/* 스크롤 제거 */
-ms-overflow-style: none;
scrollbar-width: none;
&::-webkit-scrollbar { display: none; }

& > input { // 필터링 값
  background: #FDFBF8;
  color: #FE6834;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 130%;
  padding: 10px 25px;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  :nth-child(1) {
    background-color: #FE6834;
    color: #FDFBF8;
  }

  :nth-child(2) {
    color: #58BF3E;
    :hover {
      background-color: #58BF3E;
      color: #FDFBF8;
      font-weight: 700;
    }
  }

  :nth-child(3) {
    color: #3491FE;
    :hover {
      background-color: #3491FE;
      color: #FDFBF8;
      font-weight: 700;
    }
  }

  :nth-child(4) {
    color: #DA52CC;
    :hover {
      background-color: #DA52CC;
      color: #FDFBF8;
      font-weight: 700;
    }
  }
}
`

/* 게시글 */
export const Container__Board = styled.table`
width: 100%;
border-collapse: collapse; 
background-color: #FDFBF8;
font-size: 1.6rem;
border-radius: 12px;
overflow: hidden;

* {
  padding: 16px 0;
  background-color: #FDFBF8;
  color: #A8A8A8;
}

& th { // 게시판 헤더
  border-bottom: 1px solid #A8A8A8;
  border-spacing: 5px 5px;
  color: #2C2C2C;

  :nth-child(1) { width: 10%; }
  :nth-child(2) { width: auto; }
  :nth-child(n+3) { width: 15%; }
}

& tr { // 게시글
  border-bottom: 1px solid #E8E8E8; 
  :last-child{ // 마지막줄은 선 없애기
    border: none;
  }
}

& td {
  text-align: center;

  :nth-child(1) { // 구분
    color: #3491FE;
  } 

  :nth-child(2) { // 제목
    text-align: left;
    color: #2C2C2C;
    * { text-decoration: none; } // 링크 밑줄 제거
  } 
}
`

/* 페이지 */ 
// 모임 페이지에 있는 페이지와 디자인이 같기 때문에 나중에 따로 컴포넌트화 하기
export const Container__Page = styled.section`
display: flex;
flex-direction: row;
justify-content: center;
align-self: center;
width: 100%;
max-width: 538px;
padding-top: 10px;
gap: 1px;

& > input { // 각 페이지 번호
  width: 35px;
  height: 38px;
  text-align: center;
  background: #FDFBF8;
  color: #7A7A7A;
  font-weight: 500;
  font-size: 16px;
  line-height: 130%;
  padding: 5px 5px;
  border: 1px solid #FFEFE9;
  
  :hover {
    background-color: #FE6834;
    color: #FDFBF8;
    font-weight: 700;
  }
}
`
