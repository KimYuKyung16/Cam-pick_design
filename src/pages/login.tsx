/**
 * 로그인 페이지
 * 
 */

import { useNavigate } from 'react-router-dom';

import Footer from '../components/layout/footer';

import * as LoginStyle from "../styles/login/loginStyle"; // 로그인 스타일
import color from '../styles/color';

 
function Login() {
  const navigate = useNavigate();

  return(
  <LoginStyle.Container>
    <LoginStyle.Contents>
      <h2>로고 위치</h2>

      <LoginStyle.Container__input type="text" placeholder='아이디'/>
      <LoginStyle.Container__input type="password" placeholder='비밀번호'/>
      
      <div>
        <LoginStyle.Login__CheckBox>
          <input id="saveId" type="checkbox"/>
          <label htmlFor="saveId">아이디 저장</label>
        </LoginStyle.Login__CheckBox>
        <LoginStyle.Login__CheckBox>
          <input id="maintain" type="checkbox"/>
          <label htmlFor="maintain">로그인 상태 유지</label>
        </LoginStyle.Login__CheckBox>
      </div>

      <LoginStyle.Container__Btn type="button" value="로그인"/>
      <p onClick={ () => {navigate('/register')} }>회원가입</p>
    </LoginStyle.Contents>

    <Footer background={color.white}/>
  </LoginStyle.Container>
  );
}

 

export default Login;