/**
 * 커뮤니티 상세 페이지: 읽기
 * 
 */

import styled from 'styled-components';

import Header from '../components/header'; 
import Contents from '../components/communityDetail/contents' // 게시글 내용
import CommentInput from '../components/communityDetail/commentInput' // 댓글 입력창
import Comment from '../components/communityDetail/Comment' // 댓글
import Footer from '../components/footer'; 

import color from '../styles/color'; // 색감 정보


function CommunityDetail() {

  return(
    <>
      <Header />
      <Main>
        <Contents/>
        <CommentInput/>
        <Comment/>
      </Main>
      
      <Footer background={color.pri_sub}/>
    </>
  );
}

const Main = styled.main`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
background-color: #FFEFE9;
padding: 40px 0 70px 0;
`

export default CommunityDetail;