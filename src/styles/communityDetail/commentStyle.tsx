/**
 * 커뮤니티 상세페이지 : 댓글 스타일
 * 
 */

import styled from "styled-components";

export const Container = styled.section`
display: flex;
flex-direction: column;
width: 100%;
height: auto;
max-width: 1200px;
gap: 8px;
`

/* 하나의 댓글 컴포넌트 */
export const Container__Comment = styled.div`
height: 231px;
max-height: 231px;
background-color: #FDFBF8;
border-radius: 12px;
overflow: hidden;
`

/* 댓글 단 유저 정보 + 버튼 */
export const Comment_UserInfo = styled.div` 
display: flex;
flex-direction: row;
align-items: center;
height: 35%;
background-color: #FDFBF8;
padding: 20px 16px;
`

/* 유저 정보 */
export const User_Info = styled.div`
display: flex;
flex-direction: row;
width: 100%;
height: 100%;

& > img { // 유저 프로필
  height: 100%;
}

& > div { // 유저 닉네임, 시간
display: flex;
flex-direction: column;
justify-content: center;
padding-left: 1.5%;
gap: 10px;

  & > p {
    font-weight: 500;
    line-height: 14px;
  }

  & > p:first-child { // 닉네임
    font-size: 1.6rem;
    color: #000000
  }

  & > p:last-child { // 시간
    font-size: 1.2rem;
    color: #8C8C8C;
  }
}
`

/* 댓글 내용 */
export const Comment_Content = styled.div`
height: 35%;  
border-top: 1px solid #E8E8E8;
border-bottom: 1px solid #E8E8E8;
`

/* 답글 달기 */
export const Comment_Reply = styled.div`
display: flex;
align-items: center;
height: 30%;
padding-left: 16px;

& > input { // 답글 버튼
  background-color: #FDFBF8;
  color: #7A7A7A;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 130%;
  padding: 10px 16px;
  border: 1px solid #A8A8A8;
  border-radius: 10px;
}
`