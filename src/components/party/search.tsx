import styled from "styled-components";

function Search() {

  return(
    <Container>
      <Contents>
        <h1>캠픽커뮤로 만나는 다양한 취미 친구!</h1>  

        <h2>
          잠시 집에서 벗어나 즐겁게 사람을 만나고 싶을 때, <br/>
          다양한 모임을 통해서 나의 취미를 공유할 수 있는 친구를 만들어보세요!
        </h2>

        <Container__Search>
          <input type="text" placeholder="내가 원하는 모임을 찾아보세요!"/>
          <Search_icon src="/image/search.png"/>
        </Container__Search>
      </Contents>
    </Container>
  );
}

const Container = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
height: 50vw;
max-height: 600px;
min-height: 240px;
background-color: #FE6834;
`

/* 제목 - 검색 컨테이너*/
const Contents = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100%;
width: 90%;
max-width: 794px;
color: #FDFBF8;

& > h1 {
  padding-bottom: 5%;
  font-size: 3.2rem;
  font-weight: 700;
  line-height: 38px;
}

& > h2 {
  text-align: center;
  padding-bottom: 7%;
  font-size: 2.4rem;
  font-weight: 500;
  line-height: 36px;
}

@media screen and (max-width: 768px) { 
  align-items: flex-start;

  & > h1 {
    width: 280px;
    line-height: 138%;
  }

  & > h2 {
    display: none;
  }
}
`

/* 검색창 */
const Container__Search = styled.div`
display: flex;
flex-direction: row;
align-items: center;
width: 100%;
height: 84px;
max-width: 794px;
background-color: #FDFBF8;
padding-right: 20px;
border-radius: 12px;
box-shadow: 20px 20px 50px rgba(182, 58, 15, 0.16);

& > input { // 검색 입력창
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background-color: #FDFBF8;;
  border-radius: 12px;
  padding-left: 20px;
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 29px;
  color: #7A7A7A;
}
`

/* 검색창 아이콘 */
const Search_icon = styled.img`
width: auto;
height: 30px;

@media screen and (max-width: 768px) { 
  display: none;
}
`

export default Search;