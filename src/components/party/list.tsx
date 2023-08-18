import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { partyDetailModalActions } from "../../redux/modules/modal";

import styled from "styled-components";

import * as Card from '../../styles/common/card'; /* 카드 스타일 */

function List() {
  const dispatch = useAppDispatch();

  const clickPartyCard = () => {
    dispatch(partyDetailModalActions.setState(true));
  }

  return(
    <Container>
      <Container__list_filtering>
        <h2>원하는 모임을 선택해 보세요!</h2>
        <Container__filtering>
          <Container__filtering_menu>
            {
              new Array(9).fill(0).map((x, index) => {
                return(
                  <input key={index} type="button" value="전체" />
                )
              })
            }
            <Container__filter_mobile>
              <p>인기순</p>
              <p>최신순</p>
            </Container__filter_mobile>
          </Container__filtering_menu>

        </Container__filtering>
      </Container__list_filtering>

      <Container__List>  
        {
          new Array(12).fill(0).map((x, index) => {
            return (
              <Card_Component key={index} onClick={clickPartyCard}>
                <Card.Img src="/image/backtest.jpg" />
                <Card.Content>
                  <div>
                    <p>배드민턴 모임 최강 배드</p>
                    <p><span>모집인원</span>00명</p>
                    <p><span>모집기간</span>00.00.00~00.00.00</p>
                  </div>
                </Card.Content>
                <img src="/image/heart_empty_icon.svg"/> 
                {/* <img src="/image/heart_full_icon.svg" />  */}
              </Card_Component>
            )
          })
        }
      </Container__List> 
    </Container>
  );
}

const Container = styled.main`
display: flex;
flex-direction: column;
align-items: center;
width: auto;
height: 100%;
min-height: 500px;
background-color: #FFEFE9;
padding: 40px 0 64px 0;

@media screen and (max-width: 768px) { 
  padding: 20px 0 80px 0;
} 
`

/* 리스트 필터링 */
const Container__list_filtering = styled.section` 
display: flex;
flex-direction: column;
width: 100%;
padding: 0 20px;
max-width: calc((387px*3) + (19px * 2) + 40px); // 387px: 카드 width, 19px: gap

& > h2 {
  width: auto;
  font-weight: 700;
  font-size: 3.2rem;
  line-height: 38px;
  color: #000000;
}

@media screen and (max-width: 768px) { 
  & > h2 {
    font-size: 1.6rem;
    line-height: 19px;
  }
} 
`

/* 필터링 부분만 */
const Container__filtering = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
width: 100%;
margin: 16px 0 24px 0;

@media screen and (max-width: 768px) { 
  margin: 10px 0 15px 0;
}
`

/* 필터링 메뉴 */
const Container__filtering_menu = styled.div`
display: flex;
gap: 8px;
width: 100%;
flex-flow: row wrap;

& > input { // 메뉴
  background-color: #FDFBF8;
  color: #FF6F3D;
  padding: 8px 16px;
  border-radius: 8px;
  line-height: 21px;
  font-weight: 700;
  font-size: 1.8rem;
  border: none;
  cursor: pointer;

  &:first-child {
    background-color: #FF6F3D;
    color: #FDFBF8;
  }

  &:hover {
    background-color: #FF6F3D;
    color: #FDFBF8;
  }
}

@media screen and (max-width: 768px) { 
  & > input {
    padding: 2px 12px;
    font-size: 1rem;
    border-radius: 4px;
  }
} 
`

/* 정렬 기준 - PC */
// const Container__filter_pc = styled.select`
// font-weight: 500;
// font-size: 1.7rem;
// background: url( "/image/arrow.svg" ) no-repeat 95px center; // 화살표
// background-size: 20px;
// background-color: #FDFBF8;
// color: #2C2C2C;
// margin-left: auto;
// padding: 10px 36px 10px 16px;
// border-radius: 8px;
// border: none;
// outline: none;

// // 기본 커스텀 제거
// -o-appearance: none;
// -webkit-appearance: none;
// -moz-appearance: none;
// appearance: none;

// ::-ms-expand { // IE
// 	display: none;
// }

// @media screen and (max-width: 768px) { 
//   display: none;
// } 
// `

/* 정렬 기준 - 모바일 */
const Container__filter_mobile = styled.div`
display: flex;
height: auto;
align-items: center;
font-weight: 500;
font-size: 1.8rem;
margin-left: auto;
gap: 16px;

& > p {
  color: #A8A8A8;
  cursor: pointer;
  :hover {
    color: #FF6F3D;
  }
}

@media screen and (max-width: 768px) { 
  gap: 10px;
  font-weight: 400;
  font-size: 1rem;
  zoom: 0.9;
  align-items: center;
  padding-top: 7px;

  & > p {
    color: #000000;
  }
} 
`

/* 리스트 */
const Container__List = styled.div`
display: grid;
justify-content: center;
width: 100%;
grid-template-columns: repeat(3,minmax(auto,387px)); // pc 화면일 땐 3줄
gap: 24px 19px;
padding: 0 20px 64px 20px;

@media screen and (max-width: 768px) { 
  justify-content: flex-start;
  grid-template-columns: repeat(2,minmax(150px,387px)); // 모바일 화면일 땐 2줄
  gap: 19.5px 16px;
  padding: 0 20px 30px 20px;
  overflow: auto;
}
`

/* 카드 */
const Card_Component = styled(Card.Component)`
/* border-radius: 8px !important; */
cursor: pointer;

& > img:last-child { // 하트 아이콘
  position: absolute;
  /* top: 22px; */
  /* right: 22px; */
  top: 20px;
  right: 20px;
  width: 14%;
}
@media screen and (max-width: 1250px) { // 여백 없어지는 부분부터
  & > img:last-child { // 하트 아이콘
    top: 20px;
    right: 20px;
    top: 1.6vw;
    right: 1.6vw;
  }
} 

@media screen and (max-width: 768px) {
  & > img:last-child { // 하트 아이콘
    position: absolute;
    top: 10px;
    right: 10px;
    width: 15%;
  }
}
`

export default List;