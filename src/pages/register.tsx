/**
 * 회원가입 페이지
 * 
 */

 import styled from 'styled-components'; 

 import Footer from '../components/footer';

 import color from '../styles/color'; // 색감 정보
 
 function Register() {

   return(
    <Container>
      <Contents>
        <h2>로고 위치</h2>
        
        <Contents__component>
          <p>(필수) 아이디</p>
          <Container__input type="text"/>
        </Contents__component>

        <Contents__component>
          <p>(필수) 비밀번호</p>
          <Container__input type="password"/>
        </Contents__component>

        <Contents__component>
          <p>(필수) 비밀번호 확인</p>
          <Container__input type="password"/>
        </Contents__component>

        <Contents__component>
          <p>(필수) 닉네임</p>
          <Container__input type="text"/>
        </Contents__component>

        <Contents__component>
          <p>(선택) 자기소개</p>
          <textarea />
        </Contents__component>

        <Contents__component>
          <p>(선택) 이메일</p>
          <Container__input type="text"/>
        </Contents__component>
                
        <Container__Btn type="button" value="가입하기"/>

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
width: 100%;
height: 100%;
background-color: #FDFBF8;

-ms-overflow-style: none;
scrollbar-width: none;
&::-webkit-scrollbar { display: none; }
`

const Contents = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 386px;
height: 100%;
margin: 60px 0;

& > h2 {
  margin-bottom: 20px;
}

@media screen and (max-width: 768px) { 
  width: 80%;
}
`

/* 입력 컴포넌트 */
const Contents__component = styled.div`
display: flex;
flex-direction: column;
width: 100%;
margin: 10px 0;

& > p {
  color: #7A7A7A;
  padding-bottom: 10px;
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 21px;
}

& > textarea { // 자기소개
  background-color: #FDFBF8;
  color: #e5c6bc;
  width: 100%;
  height: 264px;
  border: 1px solid #FE6834;
  border-radius: 12px;
  font-size: 1.8rem;
  resize: none;
  outline: none;
  padding: 15px;
  font-weight: bold;
}
`

/* 입력값 */
const Container__input = styled.input`
width: 100%;
height: 50px;
background-color: #FDFBF8;
color: #e5c6bc;
border: 1px solid #FE6834;
outline: none;
font-weight: bold;
border-radius: 12px;
font-size: 1.8rem;
padding: 0 15px;

::placeholder {
  color: #E8D9D4;
}

::-ms-reveal {
  filter: invert(70%);
}
`

/* 가입하기 버튼 */
const Container__Btn = styled.input`
width: 100%;
height: 60px;
background-color: #FE6834;
color: #ffffff;
font-weight: bold;
text-align: center;
font-size: 1em;
font-weight: 700;
font-size: 1.8rem;
line-height: 21px;
margin: 40px 0 30px 0;
border: none;
border-radius: 12px;
`
 
 export default Register;