import styled from "styled-components";

import * as Card from '../../styles/card'; /* 카드 스타일 */

function List() {

  return(
    <Conainer>
      <Container__list_filtering>
        <h2>원하는 모임을 선택해 보세요!</h2>
        <Container__filtering>
          <Container__filtering_menu>
            <input type="button" value="전체" />
            <input type="button" value="전체" />
            <input type="button" value="전체" />
            <input type="button" value="전체" />
          </Container__filtering_menu>

          <Container__filter>
            <option>정렬 기준</option>       
          </Container__filter>
        </Container__filtering>
      </Container__list_filtering>

      <Container__List>  
          <Card_Component>
            <Card.Img src="/image/backtest.jpg" />
            <Card.Content></Card.Content>
            <p>♡</p> 
          </Card_Component>

          {/* 예시: 추후 삭제 */}
          <Card_Component>
            <Card.Img src="/image/backtest.jpg" />
            <Card.Content></Card.Content>
          </Card_Component>

          <Card_Component>
            <Card.Img src="/image/backtest.jpg" />
            <Card.Content></Card.Content>
          </Card_Component>

          <Card_Component>
            <Card.Img src="/image/backtest.jpg" />
            <Card.Content></Card.Content>
          </Card_Component>

          <Card_Component>
            <Card.Img src="/image/backtest.jpg" />
            <Card.Content></Card.Content>
          </Card_Component>

          <Card_Component>
            <Card.Img src="/image/backtest.jpg" />
            <Card.Content></Card.Content>
          </Card_Component>

          <Card_Component>
            <Card.Img src="/image/backtest.jpg" />
            <Card.Content></Card.Content>
          </Card_Component>
      </Container__List> 
    </Conainer>
  );
}

const Conainer = styled.main`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
height: 100%;
min-height: 500px;
background-color: #FFEFE9;
padding: 5% 16px;
`

/* 리스트 필터링 */
const Container__list_filtering = styled.section` 
display: flex;
flex-direction: column;
width: 100%;
max-width: calc((387px*3) + (19px * 2)); // 387px: 카드 width, 19px: gap

& > h2 {
  width: auto;
  font-weight: 700;
  font-size: 3.2rem;
  line-height: 38px;
  color: #000000;
  margin-bottom: 2%;
}
`

/* 필터링 부분만 */
const Container__filtering = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
width: 100%;
`

/* 필터링 메뉴 */
const Container__filtering_menu = styled.div`
display: flex;
flex-direction: row;
gap: 10px;

& > input { // 메뉴
  background-color: #FDFBF8;
  color: #FE6834;
  padding: 10px 25px;
  border-radius: 8px;
  line-height: 21px;
  font-weight: 700;
  font-size: 1.8rem;
  border: none;
  cursor: pointer;

  &:first-child {
    background-color: #FE6834;
    color: #FDFBF8;
  }

  &:hover {
    background-color: #FE6834;
    color: #FDFBF8;
  }
}
`

/* 정렬 기준 */
const Container__filter = styled.select` // 나중에 모바일 디자인 후에 수정필요
background: #FDFBF8;
color: #2C2C2C;
border-radius: 8px;
padding: 10px 12px 10px 16px;
font-weight: 500;
font-size: 1.8rem;
line-height: 21px;
border: none;
`

/* 리스트 */
const Container__List = styled.div`
justify-content: center;
display: grid;
grid-template-columns: repeat(3,minmax(auto,387px)); // pc 화면일 땐 3줄
gap: 40px 19px;

@media screen and (max-width: 768px) { 
  grid-template-columns: repeat(2,minmax(auto,387px)); // 모바일 화면일 땐 2줄
}
`

/* 카드 */
const Card_Component = styled(Card.Component)`
& > p { // 후에 하트 아이콘 이미지로 바꿀 부분
  font-size: 4rem;
  position: absolute;
  top: 0px;
  right: 10px;
  color: white;
}
`

export default List;