/**
 * 커뮤니티 상세페이지 : 게시글 내용
 * 
 */

import styled from "styled-components";

import * as ContentsStyle from "../../styles/communityDetail/contentsStyle"; // 게시글 내용 스타일
import * as Btn from "../../styles/revise_delete_Btn"; // 버튼 스타일

function Contents() {

  return(
    <ContentsStyle.Container>

      <ContentsStyle.Container__Header>

        <ContentsStyle.Container__Title>
          <ContentsStyle.Category_Title>
            <p>질문</p>
            <h2>실시간 뜨는 추천 모임</h2>
          </ContentsStyle.Category_Title>
          <ContentsStyle.Writer_Date>
            <p>글쓴이</p>
            <hr/>
            <p>2022. 12. 11.</p>
          </ContentsStyle.Writer_Date>
        </ContentsStyle.Container__Title>
        
        <Btn.Revise_Delete_Btn>
          <input type="button" value="수정"/>
          <input type="button" value="삭제"/>
        </Btn.Revise_Delete_Btn>
        
      </ContentsStyle.Container__Header>


      <ContentsStyle.Container__Content />

    </ContentsStyle.Container>
  )
}


export default Contents;