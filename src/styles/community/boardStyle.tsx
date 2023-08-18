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
margin-bottom: 50px;

& > h1 {
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 29px;
  color: #000000;
  padding-bottom: 24px;
}

@media screen and (max-width: 768px) { 
  & > h1 {
    font-size: 1.6rem;
    padding-bottom: 10px;
  }
} 
`

/* 게시판 메뉴 */
export const Container__Menu = styled.section`
display: flex;
flex-direction: row;
justify-content: space-between;
width: 100%;
height: 60px;

& > input { // 글쓰기 버튼
  width: 10%;
  background-color: #FF6F3D;
  color: #FDFBF8;
  border-radius: 12px;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 19px;
  border: none;
  cursor: pointer;
}

@media screen and (max-width: 768px) { 
  height: 40px;

  & > input { // 글쓰기 버튼
    display: none;
  }
}
`

/* 게시글 검색 */
export const Container__Search = styled.div`
display: flex;
flex-direction: row;
align-items: center;
background-color: #FDFBF8;
width: 88%;
border-radius: 12px;
overflow: hidden;

& > img { // 검색 아이콘
  height: 40%;
  background-color: #FDFBF8;
  margin: 20px;
}

& > input { // 검색창
  width: 100%;
  background-color: #FDFBF8;
  color: #2C2C2C;
  font-weight: 700;
  font-size: 1.6rem;
  border: none;
  outline: none;

  ::placeholder {
    color: #7A7A7A;
  }
}

@media screen and (max-width: 768px) { 
  flex-direction: row-reverse;
  width: 100%;
  border-radius: 4px;

  & > img { // 검색 아이콘
    height: 60%;
    margin: 10px;
  }

  & > input { // 검색창
    font-size: 1.2rem;
    padding: 14px 0 12px 17px;
  }
}
`

/* 게시글 필터링 */
export const Container__Filter = styled.section`
display: flex;
flex-direction: row;
overflow: auto; // 메뉴 넘치면 스크롤: pc화면인데 넘칠 경우 생각해봐야함. 모바일일 땐 ok
padding: 24px 0 22px 0;
gap: 8px;

/* 스크롤 제거 */
-ms-overflow-style: none;
scrollbar-width: none;
&::-webkit-scrollbar { display: none; }

& > input { // 필터링 값
  background: #FDFBF8;
  color: #FF6F3D;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 130%;
  padding: 10px 25px;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  :nth-child(1) {
    background-color: #FF6F3D;
    color: #FDFBF8;
  }

  :nth-child(2) {
    color: #58BF3E;
    :hover {
      background-color: #58BF3E;
      color: #FDFBF8;
    }
  }

  :nth-child(3) {
    color: #3491FE;
    :hover {
      background-color: #3491FE;
      color: #FDFBF8;
    }
  }

  :nth-child(4) {
    color: #DA52CC;
    :hover {
      background-color: #DA52CC;
      color: #FDFBF8;
    }
  }
}

@media screen and (max-width: 768px) { 
  padding: 10px 0 10px 0;

  & > input {
    font-size: 1rem;
    padding: 4px 12px;
    border-radius: 4px;
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
table-layout: fixed;

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
  :nth-child(2) { width: 75%; }
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
    white-space: nowrap;
    text-overflow: ellipsis; // 말줄임
    overflow: hidden;
    * { text-decoration: none; } // 링크 밑줄 제거
  } 
}

@media screen and (max-width: 768px) {
display: none;
} 
`

export const Container__Board_mobile = styled.div`
display: none;
width: 100%;
background-color: #FFFFFF;
border-radius: 4px;
overflow: hidden;

& > li {
  display: flex;
  flex-direction: column;
  justify-content: center;
  list-style: none;
  height: 42px;
  border-bottom: 1px solid #E8E8E8;
  gap: 4px;
  padding: 0 8px;

  & > div:first-child { // 구분/제목/댓글
    display: flex;
    flex-direction: row;
    width: 100%;
    font-size: 1rem;
    gap: 4px;

    & > p:nth-child(1) { // 구분
      color: #58BF3E;
    }

    & > p:nth-child(2) { // 제목
      overflow: hidden;
      color: #000000;
      width: 85%;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    & > p:nth-child(3) { // 댓글
      color: #000000;
    }
  }

  & > div:last-child { // 시간/닉네임/조회수
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 0.8rem;
    gap: 8px;
    font-weight: 400;

    & > p:nth-child(2n-1) { // 시간/닉네임/조회수
      color: #7A7A7A;
      font-size: 1rem;
      zoom: 0.9;
    }

    & > hr { // 구분선
      width: 1px;
      height: 8px;
      border: none;
      background-color: #E8E8E8;
    }
  }
}

@media screen and (max-width: 768px) {
display: block;
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
    background-color: #FF6F3D;
    color: #FDFBF8;
    font-weight: 700;
  }
}
`
