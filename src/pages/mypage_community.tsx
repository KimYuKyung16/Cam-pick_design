import Header from '../components/layout/header'; 
import List from '../components/mypage_community/list';
import Footer from '../components/layout/footer';

import Mini_Navigate from '../styles/common/list_navigate';
import color from '../styles/color'; // 색감 정보

import styled from "styled-components";

function MyPage_Community() {

  return(
    <Container>   
      <Header />
      <Main>
        <Mini_Navigate><span>마이페이지</span> {'>'} <span>내 활동</span> {'>'} <span>커뮤니티 작성글 모음</span></Mini_Navigate>
        <h1>커뮤니티 작성글</h1>
        <List />
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
padding: 40px 20px 351px 20px;
max-width: 1200px;

& > h1 {
  align-self: flex-start;
  margin-bottom: 30px;
  font-weight: 700;
  font-size: 2.4rem;
  color: #000000;
}


@media screen and (max-width: 768px) { 
  padding-top: 13px;

  & > h1 {
    font-size: 1.6rem;
    margin-bottom: 13px;
  }
} 
`


export default MyPage_Community;