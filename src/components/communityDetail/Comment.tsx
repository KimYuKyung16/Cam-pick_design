/**
 * 커뮤니티 상세페이지 : 댓글
 * 
 */

import styled from "styled-components";

import * as Btn from "../../styles/revise_delete_Btn";
import * as CommentStyle from "../../styles/communityDetail/commentStyle"; // 댓글 입력창 스타일

function Comment() {

  return(
    <CommentStyle.Container>

      {
        new Array(3).fill(0).map((x) => {
          return (
            <CommentStyle.Container__Comment>

              <CommentStyle.Comment_UserInfo>
                <CommentStyle.User_Info>
                  <img src="/image/backtest.jpg"/> 
                  <div>
                    <p>지윤이 엄마(닉네임)</p>
                    <p>2분 전(시간)</p>
                  </div>
                </CommentStyle.User_Info>
                <Btn.Revise_Delete_Btn>
                  <input type="button" value="수정"/>
                  <input type="button" value="삭제"/>
                </Btn.Revise_Delete_Btn>
              </CommentStyle.Comment_UserInfo>

              <CommentStyle.Comment_Content>
              </CommentStyle.Comment_Content>

              <CommentStyle.Comment_Reply>
                <input type="button" value="답글"/>
              </CommentStyle.Comment_Reply>

            </CommentStyle.Container__Comment>
          )
        })
      }

    </CommentStyle.Container>
  )
}


export default Comment;