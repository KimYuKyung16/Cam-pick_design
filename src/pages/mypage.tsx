import Header from '../components/layout/header'; 
import Profile from '../components/mypage/profile';
import Activity from '../components/mypage/activity';
import Edit from '../components/mypage/edit';
import Footer from '../components/layout/footer';

import Mini_Navigate from '../styles/common/list_navigate';
import color from '../styles/color'; // 색감 정보

import styled from "styled-components";


function MyPage() {

  return(
    <Container>   
      <Header />
      <Main>
        <Mini_Navigate><span>마이페이지</span> {'>'} <span>내 활동</span></Mini_Navigate>
        <h1>마이페이지</h1>
        <Profile />
        <hr />
        <Activity />
        <Edit />
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

& > hr {
  height: 1px;
  border: none;
  width: 100%;
  background-color: #E8D9D4;
  margin: 40px 0;
}

& > :nth-child(5) {
  margin-bottom: 24px;
}

@media screen and (max-width: 768px) { 
  padding-top: 13px;

  & > h1 {
    font-size: 1.6rem;
    margin-bottom: 13px;
  }
  & > hr {
    margin: 16px 0;
  }

  & > :nth-child(5) {
    margin-bottom: 16px;
  }
} 
`


export default MyPage;