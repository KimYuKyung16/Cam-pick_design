/**
 * 커뮤니티 상세페이지 : 댓글
 * 
 */

import { useState } from "react";
import styled from "styled-components";

import * as Btn from "../../styles/common/revise_delete_Btn";
import * as CommentStyle from "../../styles/communityDetail/commentStyle"; // 댓글 입력창 스타일

function Comment() {

  interface IReplyState {

  }

  let reply_length = 3;
  let [replyState, setReplyState] = useState<boolean[]>(new Array(reply_length).fill(false));

  const clickReplyBtn = (index: number) => {
    let replyState_change = [...replyState];

    if (replyState_change[index]) replyState_change[index] = false;
    else replyState_change[index] = true;

    setReplyState(replyState_change);
  }

  return(
    <CommentStyle.Container>

      {
        new Array(reply_length).fill(0).map((x, index) => {
          return (
            <>
              <CommentStyle.Container__Comment>
                <CommentStyle.Comment_UserInfo>
                  <CommentStyle.User_Info>
                    <img src="/image/backtest.jpg"/> 
                    <div>
                      <p>지윤이 엄마</p>
                      <p>2 분 전</p>
                    </div>
                  </CommentStyle.User_Info>
                  <Btn.Revise_Delete_Btn>
                    <input type="button" value="수정"/>
                    <input type="button" value="삭제"/>
                  </Btn.Revise_Delete_Btn>
                </CommentStyle.Comment_UserInfo>

                <CommentStyle.Comment_Content>
                </CommentStyle.Comment_Content>

                <CommentStyle.Comment_Reply >
                  <input type="button" value="답글" onClick={() => {clickReplyBtn(index)}}/>
                </CommentStyle.Comment_Reply>
              </CommentStyle.Container__Comment>

              <CommentStyle.Reply state={replyState[index]}>
                <img src="/image/reply_arrow.svg"/>
                <textarea placeholder="댓글 입력"/>
                <input type="button" value="등록하기"/>
              </CommentStyle.Reply>

            </>

          )
        })
      }

    </CommentStyle.Container>
  )
}


export default Comment;