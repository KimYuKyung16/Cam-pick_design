import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { partyInfoActions } from '../../redux/modules/party';

import styled from "styled-components";

import * as NameStyle from '../../styles/registerParty/nameStyle';

function Name() {
  const dispatch = useAppDispatch();
  const name_limit = 20;

  interface IName {
    value: string,
    length: number
  }

  let [name, setName] = useState<IName>({value:'', length: 0});

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => { 
    setName({value: e.target.value, length: e.target.value.length}); // 나중에 value 빼고 length만 남기기
    dispatch(partyInfoActions.setTitle(e.target.value));
  };


  return(
    <NameStyle.Container>
      <h2>모임 이름이 <br/>무엇인가요?</h2>
      <NameStyle.Container__Name>
        <input type="text" maxLength={name_limit} onChange={onChangeName}/> 
        <p>{name.length}/{name_limit}</p>
      </NameStyle.Container__Name>
    </NameStyle.Container>
  );
}



export default Name;