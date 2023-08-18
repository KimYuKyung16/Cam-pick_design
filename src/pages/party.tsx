import { useAppSelector } from "../redux/hooks";

import CardDetail from "../components/party/cardDetail"; // 카드 상세 화면
import Header from '../components/layout/header'; 
import Search from '../components/party/search'; // 감섹
import List from '../components/party/list'; // 리스트
import Footer from '../components/layout/footer';

import color from '../styles/color'; // 색감 정보
import styled from "styled-components";


function Main() {
  let cardDetailModalState = useAppSelector((state  => state.partyDetailModal));

  return(
    <Container>
      <CardDetailComponent state={cardDetailModalState.state}>
        <CardDetail />
      </CardDetailComponent>

     
      <Header />
      <Search />
      <List /> 
      <Footer background={color.pri_sub}/>
    </Container>
  );
}

const Container = styled.div`

`

interface ICardDetailModalState {
  state: boolean;
}

const CardDetailComponent = styled.section`
  display: ${(props: ICardDetailModalState) => props.state ? 'block' : 'none'};
`

export default Main;