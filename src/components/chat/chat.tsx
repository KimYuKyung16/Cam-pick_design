import styled from "styled-components";

function Chat() {

  return(
    <Container>   
      <Container__Title>
        <p>짱 배드민턴 모임</p>
        <h3>지윤이 엄마</h3>
      </Container__Title>

      <Container__Content>
        <Container__Content_send>
          <input type="text" placeholder="메시지 입력..."/>
          <p>보내기</p>
        </Container__Content_send>
      </Container__Content>
    </Container>
  );
}

const Container = styled.section`
width: 60%;
/* height: 100%; */
max-width: 692px;
border-right: 2px solid #E8D9D4;
background-color: #FFEFE9;
position: relative;
`

const Container__Title = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #FDFBF8;
height: 88px;
border-bottom: 2px solid #E8D9D4;

gap: 8px;

& > p { // 모임 이름
  font-size: 1.6rem;
  font-weight: 700;
  color: #7A7A7A;
}

& > h3 { // 닉네임
  font-size: 2.4rem;
  font-weight: 700;
  color: #2C2C2C;
}
`

const Container__Content = styled.div`
display: flex;
flex-direction: column;
background-color: #FFEFE9;
height: calc(100% - 88px);
`

const Container__Content_send = styled.div`
display: flex;
flex-direction: row;
align-self: center;
align-items: center;
background-color: #FDFBF8;
border: 1px solid #E8D9D4;
border-radius: 8px;
width: 95%;
max-width: 652px;
height: 53px;
overflow: hidden;
position: absolute;
bottom: 20px;

& > input { // 채팅 입력창
  border: none;
  outline: none;
  font-weight: 500;
  font-size: 1.6rem;  
  color: #A8A8A8;
  background-color: #FDFBF8;
  height: 100%;
  width: 100%;
  padding: 16px;
}

& > p { // 채팅 전송 버튼
  width: 60px;
  font-weight: 700;
  font-size: 1.6rem;
  color: #FF6F3D;
  margin-right: 18px;
  background-color: #FDFBF8;
}
`

export default Chat;