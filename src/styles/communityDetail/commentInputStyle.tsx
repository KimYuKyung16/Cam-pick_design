/**
 * 커뮤니티 상세페이지 : 댓글 입력창
 * 
 */

import styled from "styled-components";

export const Container = styled.section`
display: flex;
flex-direction: column;
width: 100%;
height: 220px;
max-width: 1200px;
max-height: 220px;
margin: 50px 0;
border-radius: 12px;
overflow: hidden;

* {
  border: none;
  outline: none;
}

& > textarea { // 댓글 입력창
  width: 100%;
  height: 75%;
  color: #2C2C2C;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 130%;
  padding: 21px;
  resize: none;

  ::placeholder {
    color: #A8A8A8;
  }
}

& > input { // 댓글 등록 버튼
  height: 25%;
  text-align: center;
  background-color: #FE6834;
  color: #FDFBF8;
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 21px;
  cursor: pointer;
}
`