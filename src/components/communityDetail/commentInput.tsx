/**
 * 커뮤니티 상세페이지 : 댓글 입력창
 * 
 */

import styled from "styled-components";

import * as CommentInputStyle from "../../styles/communityDetail/commentInputStyle"; // 댓글 입력창 스타일

function CommentInput() {

  return(
    <CommentInputStyle.Container>
      <textarea placeholder="댓글 입력"/>
      <input type="button" value="등록하기"/>
    </CommentInputStyle.Container>
  )
}



export default CommentInput;