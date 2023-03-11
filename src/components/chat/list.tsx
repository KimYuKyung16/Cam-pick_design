import styled from "styled-components";

function List() {

  return(
    <Container>   
      <Container__Title>
        <img src="/image/search_icon.svg" />
        <h3>채팅 목록</h3>
      </Container__Title>

      <Container__ChatList>
        {
          new Array(8).fill(0).map((x) => {
            return(
              <li>
                <img src="/image/backtest.jpg" />
                <div>
                  <p>지윤이 엄마</p>
                  <p>혹시 주로 모임을 갖는 장소가 어디인가요?어디인가요?어디인가요?</p>
                </div>
                <p>2</p>
              </li>
            )
          })
        }
      </Container__ChatList>

    </Container>
  );
}

const Container = styled.section`
/* background-color: aqua; */
width: 40%;
max-width: 506px;
/* min-width: 506px; */
border-left: 2px solid #E8D9D4;
border-right: 2px solid #E8D9D4;
`

const Container__Title = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
background-color: #FDFBF8;
height: 88px;
border-bottom: 2px solid #E8D9D4;
position: relative;

& > img { // 뒤로가기 아이콘
  width: 30px;
  position: absolute;
  left: 25px;
}

& > h3 { 
  font-size: 2.4rem;
  color: #2C2C2C;
  font-weight: 700;
}
`

const Container__ChatList = styled.ul`
background-color: #FDFBF8;

& > li {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 84px;
  position: relative;
  padding: 13px 22px;
  gap: 16px;
  
  & > img { // 채팅 프로필 사진
    width: 60px;
    height: 60px;
    border-radius: 4px;
  }

  & > div {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 80%;
    /* background-color: #705327; */

    & > p:first-child { // 닉네임
      font-weight: 700;
      font-size: 1.8rem;
      color: #2C2C2C;
    }

    & > p:last-child { // 채팅 내용
      font-weight: 500;
      font-size: 1.6rem;
      color: #7A7A7A;
      width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      padding-right: 30px;
    }
  }

  & > p { // 채팅 개수
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FDFBF8;
    font-weight: 500;
    font-size: 1.2rem;
    
    width: 28px;
    height: 28px;
    background: #FF2C2C;
    border-radius: 100px;
    position: absolute;
    right: 10px;
  }
}
`


export default List;