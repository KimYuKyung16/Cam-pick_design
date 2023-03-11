/**
 * 모임글 등록
 * 
 */

 import styled from 'styled-components';

 import Header from '../components/layout/header'; 
 import Name from '../components/registerParty/name' // 모임이름
 import Tags from '../components/registerParty/tag' // 태그
 import Period from '../components/registerParty/period' // 모집기간
 import Personnel from '../components/registerParty/personnel' // 모집인원
 import Introduction from '../components/registerParty/introduction' // 소개글
 import Banner from '../components/registerParty/banner' // 대표 이미지
 import Footer from '../components/layout/footer';
 
 import color from '../styles/color'; // 색감 정보
 
 
 function RegisterParty() {
 
   return(
     <Container>
       <Header />
       <Main>
          <h1>모임을 등록해 주세요.</h1>
          <Name />
          <Tags />
          <Period />
          <Personnel />
          <Introduction />
          <Banner />
          <input type="button"value="등록하기" />
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
padding: 40px 20px 229px 20px;
max-width: 1200px;
gap: 27px;

& > h1 {
  font-weight: 700;
  font-size: 2.4rem;
  color: #000000;
  margin-bottom: 10px;
}

& > input {
  width: 100%;
  height: 60px;
  max-width: 386px;
  background: #FF6F3D;
  border-radius: 12px;
  border: none;
  font-weight: 700;
  font-size: 1.8rem;
  color: #FFFFFF;
  align-self: center;
  margin-top: 75px;
}

@media screen and (max-width: 768px) { 
  padding: 16px 20px;
  gap: 16px;

  & > h1 {
    font-weight: 700;
    font-size: 1.6rem;
    color: #000000;
    margin-bottom: 10px;
  }
} 
`
 
 export default RegisterParty;