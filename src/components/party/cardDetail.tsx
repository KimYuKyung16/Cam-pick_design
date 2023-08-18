/**
 * 모임 상세 모달창
 * 
 */

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { partyDetailModalActions } from "../../redux/modules/modal";

import styled from "styled-components";
import * as Card from '../../styles/common/card';

function CardDetail() {
  const dispatch = useAppDispatch();

  const clickCloseBtn = () => {
    dispatch(partyDetailModalActions.setState(false));
  }



  return (
    <Container>
      <Card_Component>
        <Card_Image>
          <img src="/image/heart_empty_icon.svg"/>
          <img src="/image/close_icon.svg" onClick={clickCloseBtn}/>
          <div>
            <h3>짱 배드민턴 모임</h3>
            <ul>
              {
                new Array(3).fill(0).map((x) => {
                  return (
                    <li><input type="button"value="운동"/></li>
                  )
                })
              }
            </ul>
          </div>
        </Card_Image>

        <Card_Content>
          <div>
            <div>
              <input type="button" value="모집인원"/>
              <p>12명</p>
            </div>
            <div>
              <input type="button" value="모집기간"/>
              <p>2023-02-04 ~ 2023-02-04</p>
            </div>
          </div>

          <div>
            <p>동네 친구들같이 배드민턴 하며 놀 동네 친구들</p>
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
z-index: 2; 

@media screen and (max-width: 768px) { 
  background-color: rgba(44, 44, 44, 0.5);
  backdrop-filter: blur(25px);
}
`

/* 카드 상세화면 */
const Card_Component = styled(Card.Component)`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 80%;
max-width: 700px;
max-height: 80%;
min-height: 500px;
border-radius: 20px;
/* overflow: hidden; */

@media screen and (max-width: 768px) { 
  height: 600px;
}
`

/* 카드 상세화면 이미지 */
const Card_Image = styled.div`
position: absolute;
height: calc(9/16 * 100%);
width: 100%;
top: 0;
left: 0;
background: url( "/image/backtest.jpg" ) no-repeat center center;
background-size: cover;

& > img {
  width: 36px;
  position: absolute;
  top: 32px;
  z-index: 0;
}

& > img:nth-child(1) { // 하트 아이콘
  filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.12));
  left: 32px; 
} 

& > img:nth-child(2) { right: 32px; }  // 닫기 아이콘(x)

& > div { // 이름 & 태그
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 50%;
  gap: 16px;
  transform: translate(-50%, -10px);

  & > h3 { // 모임 이름
    color: #FDFBF8;
    text-shadow: 5px 5px 10px #000000;
    font-weight: 700;
    font-size: 2.4rem;
  }

  & ul {  // 태그 리스트
    display: flex;
    flex-direction: row;
    list-style: none; 
    gap: 8px;
  }

  & input { // 태그
    padding: 8px 16px;
    background: #FF6F3D;
    border-radius: 8px;
    border: none;
    color: #FDFBF8;
    font-weight: 700;
    font-size: 1.8rem;
  }
}


@media screen and (max-width: 768px) { 
  height: calc(8/16 * 100%);

  & > img {
    width: 22px;
    top: 10px;
  }
  & > img:nth-child(1) { left: 10px; }
  & > img:nth-child(2) { right: 10px; }

  & > div { // 이름 & 태그
    gap: 8px;

    & > h3 { // 모임 이름
      font-size: 1.6rem;
    }

    & input { // 태그
      padding: 4px 12px;
      border-radius: 4px;
      font-size: 1rem;
    }
  }
}
`

/* 카드 상세화면 내용 */
const Card_Content = styled(Card.Content)`
display: flex;
justify-content: flex-start;
flex-direction: column;
padding: 0 20px 20px 20px;

& > div:nth-child(1) { // 모집인원 & 모집기간
  display: flex;
  flex-direction: row;
  gap: 20px;
  height: auto;
  padding: 0;
  padding-bottom: 10px;

  & > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;

    & > input {
      padding: 4px 8px;
      border: 1px solid #FF6F3D;
      border-radius: 100px;
      color: #FF6F3D;
      background-color: #FDFBF8;
      font-size: 1.6rem;
    }

    & > p {
      font-weight: 500;
      font-size: 1.6rem;
      color: #2C2C2C;
    }
  }
}

& > div:nth-child(2) { // 소개글
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 70%;
  background-color: #FFEFE9;
  color: #2C2C2C;
  font-weight: 500;
  line-height: 21px;
  /* margin-bottom: 10px; */
  padding: 20px;
  /* max-height: 100px; */
  /* overflow: hidden; */

  & > p {
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 1.5rem;
  }
}

& > div:nth-child(3) { // 버튼 2개
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: auto;
  gap: 10px;
  padding: 0;
  padding-top: 10px;

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
      background-color: #FF6F3D;
      color: #FDFBF8; 
    }
  }
}

@media screen and (max-width: 768px) { 
  top: calc(8/16 * 100%); // OR bottom: 0;
  height: calc(100% - (8/16 * 100%));
  padding: 8px;

  & > div:nth-child(1) { // 모집인원 & 모집기간
    flex-direction: column;
    gap: 4px;
    align-items: flex-start;

    & > div {
      gap: 4px;

      & > input {
        padding: 4px 8px;
        font-size: 1.2rem;
      }

      & > p {
        font-size: 1.2rem;
      }
    }
  }

  & > div:nth-child(2) { // 소개글
    font-size: 1rem;
    padding: 8px;
  }


  & > div:nth-child(3) { // 버튼 2개
    flex-direction: column;

    & > input {
      padding: 12px 0;
      font-size: 1.2rem;
    }
  }
}
`

export default CardDetail;