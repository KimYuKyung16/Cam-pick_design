/**
 * 로그인 페이지
 * 
 */

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CryptoJS from 'crypto-js';

import { login } from "../apis/api/user";
import { ILoginValues } from "../interfaces/user";

import Footer from '../components/layout/footer';

import * as LoginStyle from "../styles/login/loginStyle"; // 로그인 스타일
import color from '../styles/color';

function Login() {
  const navigate = useNavigate();

  let [values, setValues] = useState<ILoginValues>( {uniqueId: '', password:''} ); // 아이디, 패스워드 값
  let [pwType, setPwType] = useState<string>('password'); // 패스워드 type 설정

  const onChangeId = (e: React.ChangeEvent<HTMLInputElement>) => { setValues((value) => ({...value, uniqueId:e.target.value})) }; 
  const onChangePw = (e: React.ChangeEvent<HTMLInputElement>) => { setValues((value) => ({...value, password:e.target.value})) }; 

  /* 로그인 과정 */
  const click_LoginBtn = async () => {
    if (values.uniqueId && values.password) {
        const loginState = await login(values);
        
        if (loginState?.status === 200) {
          const accessToken = loginState?.data.accessToken;
          const userIdx = loginState?.data.userIdx;

          console.log(accessToken)
          
          localStorage.setItem('accessToken', accessToken);
          localStorage.setItem('encryptedAccessToken', bcryptFunction(loginState?.data.accessToken));
          localStorage.setItem('userIdx', userIdx);
          
          navigate('/');
        } else {
          // 실패한 경우
          alert("로그인에 실패하셨습니다.");
        }
        
    } else {
      alert("입력되지않은 부분이 있습니다.");
    }
  }

  const bcryptFunction = (accessToken: string) => {
    let ciphertext = CryptoJS.AES.encrypt(accessToken, (process.env.REACT_APP_AccessTokenSecretKey as string)).toString();
    return ciphertext
  }
  
  // /* 패스워드 타입 변경 */
  const changePwType = () => {
    if (pwType === 'text') setPwType('password');
    else setPwType('text');
  }

  return(
  <LoginStyle.Container>
    <LoginStyle.Contents>
      <h2>로고 위치</h2>

      <LoginStyle.Container__input type="text" placeholder='아이디' onChange={onChangeId}/>
      <LoginStyle.Container__Password tabIndex={0} type={pwType}>
        <input type={pwType} placeholder='비밀번호' onChange={onChangePw}/>
        <img src="/image/password_eye_icon.svg" onClick={changePwType}/>
        <img src="/image/password_eye_icon_focus.svg" onClick={changePwType}/>
        <img src="/image/password_closedeye_icon.svg" onClick={changePwType}/>
      </LoginStyle.Container__Password>
      
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

      <LoginStyle.Container__Login_Btn type="button" value="로그인" onClick={click_LoginBtn}/>
      <p onClick={ () => {navigate('/register')} }>회원가입</p>
    </LoginStyle.Contents>

    <Footer background={color.white}/>
  </LoginStyle.Container>
  );
}


export default Login;