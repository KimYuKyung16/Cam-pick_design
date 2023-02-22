import styled from "styled-components";
import * as Card from '../../styles/card';

function cardDetail() {
  return (
    <Container>
      <Card_Component>
        <Card_Image src="/image/backtest.jpg" />
        <Card_Content>
          <div>
            <p>같이 배드민턴 하며 놀 동네 친구들</p>
          </div>
          <div>
            <input type="button" value="메세지 보내기"/>
            <input type="button" value="바로 신청하기"/>
          </div>
        </Card_Content>
      </Card_Component>
    </Container> 
  );
}

/* 블러 처리 배경 */
const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100vh;
position: fixed;
top: 0;
left: 0;
background-color: rgba(0, 0, 0, 0.7);
backdrop-filter: blur(5px);
z-index: 1; 

@media screen and (max-width: 768px) { 
  background-color: rgba(44, 44, 44, 0.5);
  backdrop-filter: blur(25px);
}
`

/* 카드 상세화면 */
const Card_Component = styled(Card.Component)`
display: flex;
justify-content: center;
align-items: center;
width: 80%;
max-width: 700px;
max-height: 80%;

@media screen and (max-width: 768px) { 
  height: 600px;
}
`

/* 카드 상세화면 이미지 */
const Card_Image = styled(Card.Img)`
@media screen and (max-width: 768px) { 
  height: calc(8/16 * 100%);
}
`

/* 카드 상세화면 내용 */
const Card_Content = styled(Card.Content)`
display: flex;
justify-content: center;
flex-direction: column;
padding: 20px;

& > div:nth-child(1) { // 소개글
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #FFEFE9;
  color: #2C2C2C;
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 21px;
  margin-bottom: 10px;
  padding: 20px;
}

& > div:nth-child(2) { // 버튼 2개
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  gap: 10px;

  & > input {
    text-align: center;
    width: 100%;
    padding: 2% 4%;
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 21px;
    border: none;
    border-radius: 8px;

    :nth-child(1) { // 메세지 보내기 버튼
      background-color: #E8E8E8;
      color: #010101;
    }

    :nth-child(2) { // 바로 신청하기 버튼
      background-color: #FE6834;
      color: #FDFBF8; 
    }
  }
}

@media screen and (max-width: 768px) { 
  top: calc(8/16 * 100%); // OR bottom: 0;
  height: calc(100% - (8/16 * 100%));

  & > div:nth-child(2) { // 버튼 2개
    flex-direction: column;

    & > input {
      padding: 20px 0;
    }
  }
}
`

export default cardDetail;