import React, { HTMLProps, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { partyInfoActions } from '../../redux/modules/party'

import styled from "styled-components";

import * as TagStyle from '../../styles/registerParty/tagStyle';

function Tags() {
  const dispatch = useAppDispatch();
  let tagList  = ['운동', '요리', '공부', '친목']
  let [tagState, setTagState] = useState<boolean[]>(new Array(tagList.length).fill(false));

  const click_Tag = (index: number, e: React.MouseEvent) => {
    let changedTagState = new Array(tagList.length).fill(false);
    changedTagState[index] = true;
    setTagState(changedTagState);
    dispatch(partyInfoActions.setTag('#' + (e.target as HTMLInputElement).value));
  }

  return(
    <TagStyle.Container>
      <h2>모임을 나타내는<br/>태그를 선택하세요.<br/><span>(중복 선택 가능)</span></h2>
      <TagStyle.Container__Tag>
        {
          tagList.map((x, index) => {
            return (
              <TagStyle.Tag key={index} type="button" value={x} state={tagState[index]} onClick={(e) => { click_Tag(index, e) }}/> 
            )
          })
        }
      </TagStyle.Container__Tag>
    </TagStyle.Container>
  );
}



export default Tags;