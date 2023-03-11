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

@media screen and (max-width: 768px) { 
  border-radius: 4px;
} 
`

export const Container__Header = styled.div`
display: flex;
flex-direction: row;
align-items: center;
width: 100%;
background-color: #FDFBF8;
padding: 24px 16px;
border-bottom: 1px solid #E8E8E8;

@media screen and (max-width: 768px) { 
  padding: 8px;
} 
`

/* 게시글 정보 */
export const Container__Title = styled.div`
display: flex;
flex-direction: column;
width: 100%;
gap: 10px;

@media screen and (max-width: 768px) { 
  gap: 2px;
} 
`

/* 구분 / 제목 */
export const Category_Title = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: center;
gap: 16px;

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

@media screen and (max-width: 768px) {
  gap: 8px; 

  & > p {
    font-weight: 700;
    font-size: 1.2rem;
  }

  & > h2 {
    font-size: 1.2rem;
  }
}
`

/* 글쓴이 / 날짜 */
export const Writer_Date = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;

& > div:first-child {
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
    height: 10px;
    background-color: #A8A8A8;
    border: none;
  }
}

@media screen and (max-width: 768px) { 
  & > div:first-child {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4px;

    & > p { // 글쓴이 / 날짜
      color: #7A7A7A;
      font-weight: 500;
      font-size: 1rem;
      zoom: 0.9;
    }

    & > hr { // 선
      height: 6px;
    }
  }
} 
`

/* 내용 */
export const Container__Content = styled.div`
width: 100%;
height: 400px;
background: #FDFBF8;
padding: 16px;
border: none;

@media screen and (max-width: 768px) { 
  min-height: 161px;
  height: auto;
} 
`