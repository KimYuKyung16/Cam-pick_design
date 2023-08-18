import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { commmunityContentActions } from '../../redux/modules/community'

import styled from "styled-components";

import * as TagStyle from '../../styles/registerCommunity/tagStyle';

function Tags() {
  const dispatch = useAppDispatch();

  interface ISelected {
    tag1: boolean,
    tag2: boolean,
    tag3: boolean
  }

  let [selected, setSelcted] = useState<ISelected>({tag1: true, tag2: false, tag3: false});
 
  const click_Tag1 = () => { 
    dispatch(commmunityContentActions.setTag('1'));
    setSelcted({tag1: true, tag2: false, tag3: false});
  }

  const click_Tag2 = () => { 
    dispatch(commmunityContentActions.setTag('2'));
    setSelcted({tag1: false, tag2: true, tag3: false});
  }

  const click_Tag3 = () => { 
    dispatch(commmunityContentActions.setTag('3'));
    setSelcted({tag1: false, tag2: false, tag3: true});
  }

  return(
    <TagStyle.Container>
      <TagStyle.Container__Tag>
        <TagStyle.Tag type="button" value="잡담" onClick={click_Tag1} color={'#58BF3E'} selected={selected.tag1} /> 
        <TagStyle.Tag type="button" value="질문" onClick={click_Tag2}  color={'#3491FE'} selected={selected.tag2}/> 
        <TagStyle.Tag type="button" value="홍보" onClick={click_Tag3}  color={'#DA52CC'} selected={selected.tag3}/> 
      </TagStyle.Container__Tag>
    </TagStyle.Container>
  );
}



export default Tags;