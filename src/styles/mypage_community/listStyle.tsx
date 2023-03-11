import styled from "styled-components";

export const Container = styled.section`
display: flex;
flex-direction: row;
width: 100%;
height: auto;
position: relative;
gap: 20px;

@media screen and (max-width: 768px) { 
  flex-direction: column;
  gap: 16px;
}
`

/* 커뮤니티 작성글 */
export const Container__List = styled.table`
width: 100%;
height: auto;
border-collapse: collapse;
table-layout: fixed;
background-color: #FDFBF8;
font-size: 1.6rem;
padding: 16.5px 16px;
border-radius: 8px;
overflow: hidden;

* {
  background-color: #FDFBF8;
  color: #A8A8A8;
}

& tr { // 게시글
  border-bottom: 1px solid #E8E8E8; 
  :last-child { border: none; } // 마지막줄은 선 제거
}

& td {
  text-align: center;
  font-weight: 500;
  padding: 16px 0px;

  :nth-child(1) { // 구분
    width: 60px; 
    color: #3491FE;
    white-space: nowrap;
  } 

  :nth-child(2) { // 제목
    text-align: left;
    width: auto;
    color: #2C2C2C;
    padding-right: 10px;
    overflow: hidden;
    text-overflow: ellipsis; // 말줄임
    white-space: nowrap;
   
    * { text-decoration: none; } // 링크 밑줄 제거
  } 

  :nth-child(3) { // 수정/삭제 버튼
    width: 80px;
    height: 100%;
    padding-right: 10px;
  }
}

@media screen and (max-width: 768px) { 
  font-size: 1.2rem;

  & td {
    padding: 8px 0px;

    :nth-child(1) { width: 40px; } // 구분
    :nth-child(2) { padding-left: 10px; } // 제목
    :nth-child(3) { display: none; } // 수정/삭제 버튼
  }
}
`
