/**
 * 커뮤니티 상세 페이지: 읽기
 * 
 */

import styled from 'styled-components';

import Header from '../components/layout/header'; 
import Contents from '../components/communityDetail/contents' // 게시글 내용
import CommentInput from '../components/communityDetail/commentInput' // 댓글 입력창
import Comment from '../components/communityDetail/comment' // 댓글
import Footer from '../components/layout/footer';

import Mini_Navigate from '../styles/common/list_navigate';
import color from '../styles/color'; // 색감 정보


function CommunityDetail() {

  return(
    <Container>
      <Header />
      <Main>
        <Mini_Navigate><span>마이페이지</span> {'>'} <span>내 활동</span> {'>'} <span>모집 작성글 모음</span></Mini_Navigate>
        <Contents/>
        <CommentInput/>
        <Comment/>
      </Main>
      
      <Footer background={color.pri_sub}/>
    </Container>
  );
}

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: #FFEFE9;
min-height: 100vh;
height: auto;
`

const Main = styled.main`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
background-color: #FFEFE9;
padding: 40px 20px 70px 20px;
max-width: 1119px;
`

export default CommunityDetail;