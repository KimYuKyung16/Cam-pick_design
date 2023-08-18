import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { partyInfoActions } from '../../redux/modules/party';

import styled from "styled-components";

import * as PersonnelStyle from '../../styles/registerParty/personnelStyle';

function Introduction() {
  const dispatch = useAppDispatch();

  const onChangePersonnel = (e: React.ChangeEvent<HTMLInputElement>) => { 
    if (e.target.value.length > e.target.maxLength) {
      e.target.value = e.target.value.slice(0, e.target.maxLength);
    }
    dispatch(partyInfoActions.setCapacity(e.target.value));
  }; 


  return(
    <PersonnelStyle.Container>
      <h2>모집인원</h2>
      <PersonnelStyle.Container__Personnel>
        <input type="number" onChange={onChangePersonnel} maxLength={2}/> 
        <p>명</p>
      </PersonnelStyle.Container__Personnel>
    </PersonnelStyle.Container>
  );
}


export default Introduction;