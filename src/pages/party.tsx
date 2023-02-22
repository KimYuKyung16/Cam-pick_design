import CardDetail from "../components/party/cardDetail"; // 카드 상세 화면
import Header from '../components/header'; 
import Search from '../components/party/search'; // 감섹
import List from '../components/party/list'; // 리스트
import Footer from '../components/footer';

import color from '../styles/color'; // 색감 정보


function Main() {

  return(
    <>
      {/* <CardDetail /> */}
     
      <Header />
      <Search />
      <List /> 
      <Footer background={color.pri_sub}/>
    </>
  );
}

export default Main;