/**
 * 커뮤니티 인기글
 * 
 */

import styled from "styled-components";

import * as popularPostStyle from "../../styles/community/popularPostStyle"; // 인기글 스타일

function PopularPost() {

  return(
    <popularPostStyle.Container>
      <h1>지금 인기있는 글을 확인해 보세요!</h1>
      
      <popularPostStyle.Container__PopularPost>
        <popularPostStyle.Popular_Post>
          <tbody>
            {
              new Array(5).fill(0).map((x) => { // 테스트용
                return(
                  <tr>
                    <td>01</td>
                    <td>잡담</td>
                    <td>제목</td>
                  </tr>
                )
              })
            }
          </tbody>
        </popularPostStyle.Popular_Post>

        <popularPostStyle.Popular_Post>
          <tbody>
            {
              new Array(5).fill(0).map((x) => { // 테스트용
                return(
                  <tr>
                    <td>01</td>
                    <td>잡담</td>
                    <td>제목</td>
                  </tr>
                )
              })
            }
          </tbody>
        </popularPostStyle.Popular_Post>
      </popularPostStyle.Container__PopularPost>
  

    </popularPostStyle.Container>
  )
}



export default PopularPost;