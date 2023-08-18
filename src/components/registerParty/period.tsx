import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { partyInfoActions } from '../../redux/modules/party';

import getDateTime from "../../utils/getDateTime";

import styled from "styled-components";

import * as PeriodStyle from '../../styles/registerParty/periodStyle';

function Period() {
  const dispatch = useAppDispatch();

  const getStartDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    let startDate = e.target.value + ' ' + getDateTime.getTime();
    dispatch(partyInfoActions.setStartDate(startDate));
  }

  const getDueDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    let dueDate = e.target.value + ' ' + '23:59:59';
    dispatch(partyInfoActions.setDueDate(dueDate));
  }

  return(
    <PeriodStyle.Container>
      <h2>모집기간</h2>
      <PeriodStyle.Container__Period>
        <input type="date" min={getDateTime.getDate()} onChange={getStartDate}/>
        <p>~</p>
        <input type="date" min={getDateTime.getDate()} onChange={getDueDate}></input>
      </PeriodStyle.Container__Period>
    </PeriodStyle.Container>
  );
}



export default Period;