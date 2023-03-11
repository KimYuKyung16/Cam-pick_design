import styled from "styled-components";

import * as ContentsStyle from '../../styles/registerCommunity/contentsStyle';

function Contents() {

  return(
    <ContentsStyle.Container>
      <ContentsStyle.Container__Contents>
        <input type="text" placeholder="제목을 입력하세요."/>
        <textarea />
      </ContentsStyle.Container__Contents>
    </ContentsStyle.Container>
  );
}


export default Contents;