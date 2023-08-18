/**
 * 모임글 등록
 * 
 */

import { useAppSelector } from "../redux/hooks";

import { registerCommunity } from "../apis/api/community";


import styled from 'styled-components';

import Header from '../components/layout/header'; 
import Tag from '../components/registerCommunity/tag' // 태그
import Contents from '../components/registerCommunity/contents' // 내용
import Footer from '../components/layout/footer';

import Mini_Navigate from '../styles/common/list_navigate';
import color from '../styles/color'; // 색감 정보
 
 
function RegisterCommunity() {
  const contents = useAppSelector(state => state.commmunityContent);

  /* 커뮤니티글 등록 */
  const click_RegisterBtn = async() => { 
    const test = await registerCommunity(contents);
  }

   return(
     <Container>
       <Header />
       <Main>
          <Mini_Navigate><span>마이페이지</span> {'>'} <span>내 활동</span> {'>'} <span>모집 작성글 모음</span></Mini_Navigate>
          <h1>자유롭게 이야기를 써 보세요.</h1>
          <Tag />
          <Contents />
          <input type="button"value="등록하기" onClick={click_RegisterBtn}/>
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
 max-width: 1119px;

 & > h1 {
  font-weight: 700;
  font-size: 2.4rem;
  color: #000000;
 }

 & > :nth-child(3) {
  margin: 16px 0;
 }

 & > input {
  width: 100%;
  padding: 20px 0;
  max-width: 386px;
  background: #FF6F3D;
  border-radius: 12px;
  border: none;
  font-weight: 700;
  font-size: 1.8rem;
  color: #FFFFFF;
  align-self: center;
  margin-top: 75px;
  cursor: pointer;
 }


@media screen and (max-width: 768px) { 
  padding-top: 16px;
  
  & > h1 {
    font-size: 1.6rem;
  }

  & > :nth-child(3) {
    margin: 8px 0;
  }
  
  & > input {
    margin-top: 8px;
    padding: 13px 0;
    font-size: 1.2rem;
    border-radius: 4px;
  }
}
`
 
 export default RegisterCommunity;