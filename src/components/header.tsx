import styled from "styled-components";

function Header_Nav() {

  return(
    <Header>
      <h1>로고 위치</h1>
      <Nav__Menu>
        <ul>
          <li>찾아보기</li>
          <li>커뮤니티</li>
          <li>글등록</li>
          <li>
            <input type="button" value="로그인" />
            {/* <input type="button" value="로그아웃" /> 추후에 디자인에 따라서 수정*/}
          </li>
        </ul>
      </Nav__Menu>
    </Header>
  );
}

const Header = styled.header`
display: flex;
flex-direction: row;
align-items: center;
height: 70px;
width: 100%;
overflow: auto;
background: #FE6834;

& > :nth-child(1) { // 로고
  margin-right: 15vw;
  margin-left: auto;
}

& > :nth-child(2) { // 네비게이션
  margin-left: auto;
  margin-right: auto;
}

@media screen and (max-width: 768px) { 
  flex-direction: column;
  height: auto; // 추후에 디자인에 따라 수정: 현재 달그락거리는 느낌

  & > :nth-child(1) { // 로고
    margin: 0;
  }
} 
`

/* 네비게이션 바 */
const Nav__Menu = styled.div` 
width: auto;
font-size: 1.8rem;

& > ul {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  list-style: none;  
  gap: 50px;

  & > li:nth-child(-n+3) { // 메뉴 1~3 까지
    padding: 10px 10px;
    color: #FDFBF8;
    font-size: 1.8rem;
    font-weight: 700;
    text-align: center;
    line-height: 21px;
    min-width: 85px;

    &:hover {
      border-bottom: 2px solid #FDFBF8;
    }
  }

  & input { // 로그인 / 로그아웃 버튼
    padding: 10px 20px;
    background: #2C2C2C;
    color: #FDFBF8;
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 21px;
    border-radius: 8px;
  }
}
`

export default Header_Nav;