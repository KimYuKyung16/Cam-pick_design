import { useEffect, useLayoutEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import CryptoJS from 'crypto-js';

import { decryptAccessToken } from "../../utils/decryptAccessToken";

import styled from "styled-components";

import Navbar from "./navbar";

function Header_Nav() {
  const navigate = useNavigate();
  let [loginState, setLoginState] = useState<boolean>();

  const accessToken = localStorage.getItem('accessToken');

  const clickLogoutBtn = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('encryptedAccessToken');
    localStorage.removeItem('userIdx');
    window.location.replace('/')
  }

  const confirmLoginState = () => {
    if (accessToken === decryptAccessToken()) setLoginState(true);
    else {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('encryptedAccessToken');
      localStorage.removeItem('userIdx');
    }
  }

  useLayoutEffect(() => {
    confirmLoginState();
  }, [accessToken])


  return(
    <Header>
      <Header__logo>
        <h1>로고 위치</h1>
        <LoginState_mobile state={loginState}>
          <input type="button" value="my" onClick={() => { navigate("/mypage") }}/>
          <input type="button" onClick={() => { navigate("/mypage/notification") }}/>
          <Login_Logout_Btn type="button" value="로그인" onClick={() => { navigate("/login") }}/>
          <Login_Logout_Btn type="button" value="로그아웃" onClick={ clickLogoutBtn }/>
        </LoginState_mobile>
      </Header__logo>

      <Navbar />
      
      <Header__loginState state={loginState}>
        <input type="button" value="my" onClick={() => { navigate("/mypage") }}/>
        <input type="button" onClick={() => { navigate("/mypage/notification") }}/>
        <Login_Logout_Btn type="button" value="로그인" onClick={() => { navigate("/login") }}/>
        <Login_Logout_Btn type="button" value="로그아웃" onClick={ clickLogoutBtn }/>
      </Header__loginState>
    </Header>
  );
}

interface LoginState {
  state: boolean | undefined;
}

const Header = styled.header`
display: flex;
flex-direction: row;
justify-items: center;
align-items: center;
width: 100%;
height: 70px;
background: #FF6F3D;
border-bottom: 2px solid #D83F0A;

& > :nth-child(1) { // 로고
  margin-left: auto;
}

& > :nth-child(2) { // 네비게이션
  margin-left: auto;
  margin-right: auto;
}

& > :nth-child(3) { // 로그인 상태: PC
  margin-right: auto;
}

@media screen and (max-width: 768px) { 
  flex-direction: column;
  height: auto;
  border-bottom: 1px solid #D83F0A;

  & > :nth-child(1) { // 로고
    margin: 0;
  }

  & > :nth-child(3) { // 로그인 상태
    display: none;
  }
} 
`

/* 로고 & 로그인상태: PC */
const Header__logo = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
height: 54px;
padding: 8.5px 20px 9.5px 20px;

@media screen and (max-width: 768px) { 
  width: 100%;
  height: 40px;
  border-bottom: 1px solid #D83F0A;
  padding: 4px 20px 4px 20px;
} 
`

/* 로그인 된 상태 - 모바일 */
const LoginState_mobile = styled.div` 
display: none;
flex-direction: row;
align-items: center;
gap: 10px;

& > input { // 마이페이지/알림 버튼 
  padding: 6px 5px;
  background-color: #FF6F3D;
  border: 1px solid #D83F0A;
  border-radius: 4px;
}

& > input:nth-child(1) { // 마이페이지 버튼
  display: ${(props: LoginState) => props.state ? 'block' : 'none'};
  width: 30px;
  height: 30px;
  color: #FDFBF8;
  font-weight: 700;
  font-size: 1.2rem;
}

& > input:nth-child(2) { // 알림 버튼
  display: ${(props: LoginState) => props.state ? 'flex' : 'none'};
  width: 30px;
  height: 30px;
  background: url( "/image/notification_icon.svg" ) no-repeat center center;
  background-size: 20px;
}

& > input:nth-child(3) { // 로그인 버튼
  display: ${(props: LoginState) => props.state ? 'none' : 'flex'};
  width: auto;
  padding: 3px 5px;
}

& > input:nth-child(4) { // 로그아웃 버튼
  display: ${(props: LoginState) => props.state ? 'flex' : 'none'};
  width: auto;
  padding: 3px 5px;
}

@media screen and (max-width: 768px) { 
  display: flex;
} 
`

/* 로그인 상태 - PC */
const Header__loginState = styled.div`
display: flex;
gap: 10px;

& > input { // 마이페이지/알림 버튼 
  background-color: #FF6F3D;
  border: 2px solid #D83F0A;
  font-size: 1.8rem;
  border-radius: 8px;
}

& > input:nth-child(1) { // 마이페이지 버튼
  display: ${(props: LoginState) => props.state ? 'block' : 'none'};
  width: 45px;
  height: auto;
  color: #FDFBF8;
  font-weight: 700;
  margin-left: 3vw;
  padding: 6px 5px;
}

& > input:nth-child(2) { // 알림 버튼
  display: ${(props: LoginState) => props.state ? 'flex' : 'none'};
  width: 45px;
  height: auto;
  padding: 6px 5px;
  background: url( "/image/notification_icon.svg" ) no-repeat center center;
  background-size: 20px;
  
}

& > :nth-child(3) { // 로그인 버튼
  display: ${(props: LoginState) => props.state ? 'none' : 'flex'};
}

& > :nth-child(4) { // 로그아웃 버튼
  display: ${(props: LoginState) => props.state ? 'flex' : 'none'};
}

@media screen and (max-width: 768px) { 
  display: block;
} 
`

/* 로그인/로그아웃 버튼 */
const Login_Logout_Btn = styled.input`
background: #FF6F3D;
color: #FDFBF8;
font-size: 1.8rem;
font-weight: 700;
line-height: 21px;
border: 2px solid #D83F0A;
border-radius: 8px;
margin-right: auto;
padding: 10px 20px;
white-space: nowrap;

@media screen and (max-width: 768px) { 
  font-size: 1.2rem;
  padding: 0;
  margin: 0;
  border: 1px solid #D83F0A;
  border-radius: 4px;
} 
`

export default Header_Nav;