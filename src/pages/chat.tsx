/**
 * 채팅
 * 
 */

 import styled from 'styled-components';

 import Header from '../components/layout/header'; 
 import List from '../components/chat/list' // 채팅 리스트
 import Chat_Content from '../components/chat/chat' // 채팅 내용
 import Footer from '../components/layout/footer';
 
 import color from '../styles/color'; // 색감 정보
 
 
 function Chat() {
 
   return(
     <>
       <Header />
       <Main>
         <List />
         <Chat_Content />
       </Main>
       
       <Footer background={color.pri_sub}/>
     </>
   );
 }
 
 const Main = styled.main`
 display: flex;
 flex-direction: row;
justify-content: center;
 width: 100%;
 background-color: #FDFBF8;
 /* padding: 40px 20px 70px 20px; */
 `
 
 export default Chat;