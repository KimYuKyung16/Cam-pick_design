import styled from "styled-components";

import * as IntroductionStyle from '../../styles/registerParty/introductionStyle';

function Introduction() {

  return(
    <IntroductionStyle.Container>
      <h2>모임을 <br/>소개해 주세요.</h2>
      <IntroductionStyle.Container__Introduction>
        <textarea />
      </IntroductionStyle.Container__Introduction>
    </IntroductionStyle.Container>
  );
}


export default Introduction;