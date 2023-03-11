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
  width: 80%;
}
`

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

& > p:last-child { // 안내 문구
  color: ${(props) => props.color};
  font-weight: 500;
  font-size: 1.2rem;
  margin-top: 8px;
  /* display: none; // none || block */
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

  & > textarea { // 자기소개
    font-size: 1.8rem;
    padding: 10px;
    border-radius: 4px;
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

& > div {
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #FDFBF8;
  border: 1px solid #FF6F3D;
  border-radius: 12px;
  overflow: hidden;
  padding: 0 8px;

  & > input {
    border: none !important;
    padding: 0 !important;
    border-radius: 0px !important;
    background-color: #FDFBF8;
  }

  & > p {
    font-size: 1.6rem;
    color: #A8A8A8;
    padding: 0 10px;
  }
}

@media screen and (max-width: 768px) { 
  & > div {
    border-radius: 4px;
    & > p {
      font-size: 1.2rem;
      padding: 0;
    }
  }
} 
`

/* 입력값 */
export const Container__input = styled.input`
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

@media screen and (max-width: 768px) { 
  height: 40px;
  font-size: 1.3rem;
  border-radius: 4px;
} 
`

/* 가입하기 버튼 */
export const Container__Btn = styled.input`
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

@media screen and (max-width: 768px) { 
  height: 40px;
  font-size: 1.2rem;
  margin: 30px 0 72px 0;
} 
`
