/**
 * 로그인 페이지
 * 
 */
 import styled from 'styled-components'; 

 import Footer from '../components/footer';

 import color from '../styles/color';
 
 function Login() {

   return(
    <Container>
      <Contents>
        <h2>로고 위치</h2>

        <Container__input type="text" placeholder='아이디'/>
        <Container__input type="password" placeholder='비밀번호'/>
        
        <div>
          <Login__CheckBox>
            <input id="saveId" type="checkbox"/>
            <label htmlFor="saveId">아이디 저장</label>
          </Login__CheckBox>
          <Login__CheckBox>
            <input id="maintain" type="checkbox"/>
            <label htmlFor="maintain">로그인 상태 유지</label>
          </Login__CheckBox>
        </div>

        <Container__Btn type="button" value="로그인"/>
        <p>회원가입</p>
      </Contents>
      <Footer background={color.white}/>
    </Container>
   );
 }

 
const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-end;
align-items: center;
width: 100vw;
height: 100vh;
background-color: #FDFBF8;
`

const Contents = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 386px;
height: 100%;

& > h2 { // 로고
  margin-bottom: 20px;
}

& > div { // 체크박스들
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  margin-bottom: 25px;
}

& > p { // 회원가입
  color: #A8A8A8;
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 21px;
  cursor: pointer;
}

@media screen and (max-width: 768px) { 
  width: 80%;
}
`

/* 아이디, 패스워드 입력 */
const Container__input = styled.input`
width: 100%;
height: 60px;
background-color: #FFEFE9;
color: #e5c6bc;
font-weight: bold;
font-size: 1.8rem;
font-weight: 700;
line-height: 21px;
padding: 0 16px;
margin-bottom: 16px;
border: none;
border-radius: 12px;
outline: none;

::placeholder {
  color: #E8D9D4;
}

::-ms-reveal {
  filter: invert(70%);
}
`

/* 로그인 체크박스 */
const Login__CheckBox = styled.div`
display: flex;
flex-direction: row;
font-weight: 500;
color: #A8A8A8;
outline: 0;

& > input {
  position: relative;
  width: 20px;
  cursor: pointer;
  outline: 0;
  margin-right: 5px;
}
`

/* 로그인 버튼 */
const Container__Btn = styled.input`
width: 100%;
height: 55px;
background-color: #FE6834;
color: #ffffff;
font-weight: 700;
text-align: center;
font-size: 1.8em;
line-height: 21px;
margin-bottom: 16px;
border: none;
border-radius: 12px;
cursor: pointer;
`

 export default Login;