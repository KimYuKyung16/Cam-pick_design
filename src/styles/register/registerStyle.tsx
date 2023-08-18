import styled from 'styled-components'; 

export const Container = styled.div`
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

export const Contents = styled.div`
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
  width: 90%;
}
`

interface Display_Props {
  state?: boolean | undefined | null
}

/* 입력 컴포넌트: 안내 문자 있는 컴포넌트 */
export const Contents__component = styled.div`
display: flex;
flex-direction: column;
width: 100%;
margin: 10px 0 20px 0;

& > p:first-child { // 라벨
  color: #7A7A7A;
  padding-bottom: 10px;
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 21px;

  & > span {
    font-weight: 500;
    font-size: 1.2rem;
    color: #7A7A7A
  }
}

& > p:last-child { // 안내 문구
  display: ${(props: Display_Props) => props.state ? 'none' :  'block'}; 
  color: ${(props) => props.color};
  font-weight: 500;
  font-size: 1.2rem;
  margin-top: 8px;
}

@media screen and (max-width: 768px) { 
  margin: 10px 0;

  & > p:first-child { // 라벨
    font-weight: 700;
    font-size: 1.2rem;

    & > span {
      font-size: 1rem;
      zoom: 0.9;
    }
  }

  & > p:last-child { // 안내 문구
    font-size: 1rem;
    zoom: 0.9;
  }
} 
`

/* 입력 컴포넌트: 안내 문자 없는 컴포넌트 */
export const Contents__component2 = styled(Contents__component)`
margin: 10px 0;

& > div { // 닉네임 입력란
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #FDFBF8;
  border: 1px solid #FF6F3D;
  border-radius: 8px;
  overflow: hidden;
  padding: 0 16px;

  & > input {
    border: none !important;
    padding: 0 !important;
    border-radius: 0px !important;
    background-color: #FDFBF8;
  }

  & > p {
    font-size: 1.6rem;
    color: #A8A8A8;
    color: ${(props) => props.color};
  }
}

& > textarea { // 자기소개
  background-color: #FDFBF8;
  color: #2C2C2C;
  width: 100%;
  height: 264px;
  border: 1px solid #FE6834;
  border-radius: 8px;
  font-size: 1.8rem;
  resize: none;
  outline: none;
  padding: 15px;
  font-weight: bold;
}


@media screen and (max-width: 768px) { 
  & > div {
    border-radius: 4px;
    & > p {
      font-size: 1.2rem;
      padding: 0;
    }
  }

  & > textarea { // 자기소개
    font-size: 1.2rem;
    padding: 10px;
    border-radius: 4px;
  }
} 
`

/* 입력값 */
export const Container__input = styled.input`
width: 100%;
height: 50px;
background-color: #FDFBF8;
color: #2C2C2C;
border: 1px solid #FE6834;
outline: none;
font-weight: 500;
border-radius: 8px;
font-size: 1.8rem;
padding: 0 16px;

::placeholder {
  color: #E8D9D4;
}

@media screen and (max-width: 768px) { 
  height: 40px;
  font-size: 1.3rem;
  border-radius: 4px;
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
height: 50px;
background-color: #FDFBF8;
color: #e5c6bc;
border: 1px solid #FE6834;
border-radius: 8px;
overflow: hidden;
position: relative;

:focus-within { // focus된 div 내의 컴포넌트를 클릭했을 때도 적용
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
  background-color: #FDFBF8;
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 21px;
  padding: 0 16px;
  border: none;
  outline: none;

  ::-ms-clear, ::-ms-reveal  { display: none; } 
  // 패스워드 눈 아이콘 없애기
}

& > img { // 패스워드 눈 아이콘
  height: 40%;
  display: none;
  position: absolute;
  right: 16px;
  
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
  height: 40px;
  border-radius: 4px;

  & > input {
    font-size: 1.3rem;
    padding: 0 12px;
  }
}
`






interface IBtnState {
  state: boolean
}

/* 가입하기 버튼 */
export const Container__Btn = styled.input`
width: 100%;
height: 60px;
background-color: #FE6834;
color: #ffffff;
font-weight: bold;
text-align: center;
font-size: 1em;
font-weight: 500;
font-size: 1.8rem;
line-height: 21px;
margin: 40px 0 30px 0;
border: none;
border-radius: 12px;
cursor: ${(props: IBtnState) => props.state ? 'pointer' : 'default'};
opacity: ${(props: IBtnState) => props.state ? '100%' : '70%'};

@media screen and (max-width: 768px) { 
  height: 40px;
  font-size: 1.2rem;
  font-weight: 700;
  margin: 30px 0 72px 0;
  border-radius: 4px;
} 
`
