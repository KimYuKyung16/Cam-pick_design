/**
 * 커뮤니티 상세 페이지에서 사용되는 수정/삭제 버튼
 * 
 */

import styled from "styled-components";

export const Revise_Delete_Btn = styled.div`
display: flex;
flex-direction: row;
align-items: center;
width: auto;
height: auto;
border: 1px solid #A8A8A8;
border-radius: 4px;
overflow: hidden;

& > input {
  display: flex;
  justify-content: center;
  width: 50%;
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 130%;
  background: #FDFBF8;
  color: #7A7A7A;
  padding: 4px 8px;
  white-space: nowrap;
  border: none;

  :first-child {
    border-right: 1px solid #A8A8A8;
  }
}

@media screen and (max-width: 768px) { 
  width: 55px;
  border-radius: 6px;
  border: 1px solid #E8E8E8;
  color: #A8A8A8;
  
  & > input {  
    font-size: 1rem;
    zoom: 0.8;
    
    :first-child {
      border-right: 1px solid #E8E8E8;
    }
  }
}
`