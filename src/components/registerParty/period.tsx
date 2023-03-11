import styled from "styled-components";

import * as PeriodStyle from '../../styles/registerParty/periodStyle';

function Period() {

  return(
    <PeriodStyle.Container>
      <h2>모집기간</h2>
      <PeriodStyle.Container__Period>
        <input type="date" />
        <p>~</p>
        <input type="date"></input>
      </PeriodStyle.Container__Period>
      {/* <img src="/image/calendar_icon.png"/> */}
    </PeriodStyle.Container>
  );
}



export default Period;