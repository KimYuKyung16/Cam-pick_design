/**
 * 커뮤니티 상세 페이지에서 사용되는 수정/삭제 버튼
 * 
 */

import styled from "styled-components";

export const Revise_Delete_Btn = styled.div`
display: flex;
flex-direction: row;
width: auto;
border: 1px solid #A8A8A8;
border-radius: 8px;
overflow: hidden;

& > input {
  display: flex;
  justify-content: center;
  width: 50%;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 130%;
  background: #FDFBF8;
  color: #7A7A7A;
  padding: 10px;
  white-space: nowrap;
  border: none;

  :first-child {
    border-right: 1px solid #A8A8A8;
  }
  
}
`