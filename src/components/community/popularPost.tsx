/**
 * 커뮤니티 인기글
 * 
 */

import styled from "styled-components";

import * as popularPostStyle from "../../styles/community/popularPostStyle"; // 인기글 스타일

function PopularPost() {

  return(
    <popularPostStyle.Container>
      <h1>
        <span>지금 인기있는 글을 확인해 보세요!</span>
        <span>실시간 인기글을 확인해 보세요!</span>
      </h1>
      
      <popularPostStyle.Container__PopularPost>
        <popularPostStyle.Popular_Post>
          <tbody>
            {
              new Array(5).fill(0).map((x) => { // 테스트용
                return(
                  <tr>
                    <td>01</td>
                    <td>잡담</td>
                    <td>제목을 길게길게길게길게길게길게게길게길게길게길게게길게게길게길게길게길게게길게길게길게게길게길게길게</td>
                    <td>[14]</td>
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
                    <td>제목을 길게길게길게길게길게길게게길게길게길게길게게길게게길게길게길게길게게길게길게길게게길게길게길게</td>
                    <td>[14]</td>
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