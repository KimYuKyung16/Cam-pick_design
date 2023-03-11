import styled from "styled-components";

import * as PersonnelStyle from '../../styles/registerParty/personnelStyle';

function Introduction() {

  return(
    <PersonnelStyle.Container>
      <h2>모집인원</h2>
      <PersonnelStyle.Container__Personnel>
        <input type="text"/> 
        <p>명</p>
      </PersonnelStyle.Container__Personnel>
    </PersonnelStyle.Container>
  );
}


export default Introduction;