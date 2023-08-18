import styled from 'styled-components'; 

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-end;
align-items: center;
width: 100vw;
height: 100vh;
min-height: 500px;
background-color: #FDFBF8;

@media screen and (max-width: 768px) { 
  min-height: 400px;
} 
`

/* 메인 내용 */
export const Contents = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 386px;
height: 100%;

& > h2 { // 로고
  margin-bottom: 20px;
}

& > div:nth-child(4) { // 체크박스들
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
}

& > p { // 회원가입
  color: #A8A8A8;
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 21px;
  cursor: pointer;
}

@media screen and (max-width: 768px) { 
  width: 90%;

  & > p { // 회원가입
    font-weight: 700;
    font-size: 1.2rem;
  }
}
`

interface IPwType {
  type: string
}

/* 패스워드 입력 */
export const Container__Password = styled.div`
display: flex;
flex-direction: row;
align-items: center;
width: 100%;
height: 60px;
background-color: #FFEFE9;
margin-bottom: 21px;
border: none;
border-radius: 8px;
overflow: hidden;
position: relative;

:focus-within { // focus된 div 내의 컴포넌트를 클릭했을 때도 적용
  outline: 2px solid #FF6F3D;
  & > img:nth-child(2) { // 기본 눈 아이콘
    display: none; 
  }
  & > img:nth-child(3) {
    display: ${(props:IPwType) => props.type === 'password' ? 'block' : 'none'} !important;
  }
  & > img:nth-child(4) { 
    display: ${(props:IPwType) => props.type === 'text' ? 'block' : 'none'} !important;
    height: 50%; 
  }
} 

& > input { // 패스워드 입력창
  width: 100%;
  height: 100%;
  background-color: #FFEFE9;
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 21px;
  padding: 0 16px;
  border: none;
  outline: none;

  ::placeholder { color: #E8D9D4; }
  ::-ms-clear, ::-ms-reveal  { display: none; } 
  // 패스워드 눈 아이콘 없애기
}

& > img { // 패스워드 눈 아이콘
  height: 40%;
  display: none;
  position: absolute;
  right: 24px;

  :nth-child(2) {
    display: block;
  }

  :nth-child(3) {
    display: none;
  }
  :nth-child(4) { 
    display: none;
    height: 50%; 
  }
}

@media screen and (max-width: 768px) {
  height: 42px;
  border-radius: 4px;
  margin-bottom: 22px;

  & > input {
    font-size: 1.2rem;
  }

  & > img {
    right: 10px;
  }
}
`

/* 아이디 입력 */
export const Container__input = styled.input`
width: 100%;
height: 60px;
background-color: #FFEFE9;
color: #2C2C2C;
font-weight: bold;
font-size: 1.8rem;
font-weight: 700;
line-height: 21px;
padding: 0 16px;
margin-bottom: 16px;
border: none;
border-radius: 8px;
outline: none;

::placeholder { color: #E8D9D4; }
:focus { outline: 2px solid #FF6F3D; }

@media screen and (max-width: 768px) {
  height: 42px;
  font-size: 1.2rem;
  padding: 8px 8px 8px 16px;
  margin-bottom: 10px;
  border-radius: 4px;
} 
`

/* 로그인 체크박스 */
export const Login__CheckBox = styled.div`
display: flex;
flex-direction: row;
align-items: center;
font-weight: 500;
color: #A8A8A8;
outline: 0;

& > input { // 체크박스
  -webkit-appearance: none; // 체크 아이콘 없애기
  position: relative;
  width: 22px;
  height: 22px;
  background-color: #FDFBF8;
  margin-right: 5px;
  border: 1px solid #E8E8E8;
  border-radius: 4px;
  outline: 0;
  cursor: pointer;
  
  :checked { // 체크 됐을 때
    background: url( "/image/checkbox_check_icon.svg" ) no-repeat center center;
    background-color: #FF6F3D;
    background-size: 80%;
    border: 1px solid #FF6F3D;
  }
}

& > label { // 체크박스 라벨
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 21px;
  cursor: pointer;
}

@media screen and (max-width: 768px) { 
  & > input { // 체크박스
    width: 16px;
    height: 16px;
    border: 1px solid #A8A8A8;
    border-radius: 2px;
  }

  & > label { // 체크박스 라벨
    font-size: 1.2rem;
  }
} 
`

/* 로그인 버튼 */
export const Container__Login_Btn = styled.input`
width: 100%;
height: 55px;
background-color: #FE6834;
color: #ffffff;
font-weight: 700;
text-align: center;
font-size: 1.8rem;
line-height: 21px;
margin-top: 32px;
margin-bottom: 16px;
border: none;
border-radius: 12px;
cursor: pointer;

@media screen and (max-width: 768px) { 
  height: 42px;
  font-size: 1.2rem;
  margin-top: 20px;
  margin-bottom: 10px;
  border-radius: 4px;
} 
`
