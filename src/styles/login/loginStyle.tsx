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

& > div { // 체크박스들
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
  width: 80%;

  & > div { // 체크박스들
    margin-top: 10px;
  }

  & > p { // 회원가입
    font-weight: 700;
    font-size: 1.2rem;
  }
}
`

/* 아이디, 패스워드 입력 */
export const Container__input = styled.input`
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

::-ms-reveal { // 비밀번호 보이게 아이콘 설정
  filter: invert(70%);
}

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
  position: relative;
  width: 22px;
  height: 22px;
  outline: 0;
  margin-right: 5px;
  cursor: pointer;
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
  }

  & > label { // 체크박스 라벨
    font-size: 1.2rem;
  }
} 
`

/* 로그인 버튼 */
export const Container__Btn = styled.input`
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
