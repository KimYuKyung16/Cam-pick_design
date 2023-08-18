import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { partyInfoActions } from '../../redux/modules/party';

import styled from "styled-components";

import * as IntroductionStyle from '../../styles/registerParty/introductionStyle';

function Introduction() {
  const dispatch = useAppDispatch();

  const onChangeIntroduction = (e: React.ChangeEvent<HTMLTextAreaElement>) => { 
    dispatch(partyInfoActions.setContents(e.target.value));
  };

  return(
    <IntroductionStyle.Container>
      <h2>모임을 <br/>소개해 주세요.</h2>
      <IntroductionStyle.Container__Introduction>
        <textarea onChange={onChangeIntroduction}/>
      </IntroductionStyle.Container__Introduction>
    </IntroductionStyle.Container>
  );
}


export default Introduction;