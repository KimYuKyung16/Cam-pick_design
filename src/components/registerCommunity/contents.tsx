import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { commmunityContentActions } from '../../redux/modules/community'

import styled from "styled-components";

import * as ContentsStyle from '../../styles/registerCommunity/contentsStyle';

function Contents() {
  const dispatch = useAppDispatch();

  const contents = useAppSelector(state => state.commmunityContent);
  interface IValues {
    tag: string, //태그
    title: string, // 제목
    content: string //내용
  }

  let [values, setValues] = useState<IValues>({tag: '1', title: '', content: ''});

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => { 
    dispatch(commmunityContentActions.setTitle(e.target.value));
    setValues((value) => ({...value, id:e.target.value})) 
  }; 

  const onChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => { 
    dispatch(commmunityContentActions.setContent(e.target.value));
    setValues((value) => ({...value, pw:e.target.value})) 
  }; 

  return(
    <ContentsStyle.Container>
      <ContentsStyle.Container__Contents>
        <input type="text" placeholder="제목을 입력하세요." onChange={onChangeTitle}/>
        <textarea onChange={onChangeContent}/>
      </ContentsStyle.Container__Contents>
    </ContentsStyle.Container>
  );
}


export default Contents;