/**
 * 커뮤니티
 * 
 */

import styled from 'styled-components';

import Header from '../components/header'; 
import Board from '../components/community/board' // 게시판
import PopularPost from '../components/community/popularPost' // 인기글
import Footer from '../components/footer';

import color from '../styles/color'; // 색감 정보


function Community() {

  return(
    <>
      <Header />
      <Main>
        <Board />
        <PopularPost />
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

export default Community;