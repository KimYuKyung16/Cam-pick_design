/**
 * 커뮤니티
 * 
 */

import styled from 'styled-components';

import Header from '../components/layout/header'; 
import Board from '../components/community/board' // 게시판
import PopularPost from '../components/community/popularPost' // 인기글
import Footer from '../components/layout/footer';

import Mini_Navigate from '../styles/common/list_navigate';
import color from '../styles/color'; // 색감 정보


function Community() {

  return(
    <Container>
      <Header />
      <Main>
        <Mini_Navigate><span>마이페이지</span> {'>'} <span>내 활동</span> {'>'} <span>모집 작성글 모음</span></Mini_Navigate>
        <Board />
        <PopularPost />
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
width: 100%;
background-color: #FFEFE9;
padding: 32px 20px 70px 20px;
max-width: 1119px;
`

export default Community;