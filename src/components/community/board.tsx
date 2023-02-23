/**
 * 커뮤니티 게시판 
 * 
 */

import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";

import * as BoardStyle from "../../styles/community/boardStyle"; // 게시판 스타일

function Board() {

  return(
    <BoardStyle.Container>
      <h1>자유게시판</h1>

      <BoardStyle.Container__Menu>
        <BoardStyle.Container__Search>
          <img src="image/search.png"/>
          <input type="text" placeholder="내가 원하는 모임을 찾아보세요!"/>
        </BoardStyle.Container__Search>
        <input type="button" value="글쓰기"/>
      </BoardStyle.Container__Menu>

      <BoardStyle.Container__Filter>
        <input type="button" value="전체"/>
        <input type="button" value="잡담"/>
        <input type="button" value="질문"/>
        <input type="button" value="홍보"/>
      </BoardStyle.Container__Filter>

      <BoardStyle.Container__Board>
        <thead>
          <tr>
            <th>구분</th>
            <th>제목</th>
            <th>글쓴이</th>
            <th>날짜</th>
          </tr>
        </thead>
        <tbody>
          {
            new Array(20).fill(0).map((x) => { // 테스트용
              return (
                <tr>
                  <td>질문</td>
                  <td><Link to = ''>제목</Link></td>
                  <td>글쓴이</td>
                  <td>날짜</td>
                </tr>
              )
            })
          }
        </tbody>
      </BoardStyle.Container__Board>

      <BoardStyle.Container__Page>
        <input type="button" value="1"/>
        <input type="button" value="2"/>
        <input type="button" value="3"/>
      </BoardStyle.Container__Page>

    </BoardStyle.Container>
  )
}


export default Board;