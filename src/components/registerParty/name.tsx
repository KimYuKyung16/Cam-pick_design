import styled from "styled-components";

import * as NameStyle from '../../styles/registerParty/nameStyle';

function Name() {

  return(
    <NameStyle.Container>
      <h2>모임 이름이 <br/>무엇인가요?</h2>
      <NameStyle.Container__Name>
        <input type="text"/> 
        <p>0/20</p>
      </NameStyle.Container__Name>
    </NameStyle.Container>
  );
}



export default Name;