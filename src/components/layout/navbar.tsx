import { useState } from "react";
import { useNavigate } from 'react-router-dom';

import styled from "styled-components";

function Navbar() {
  const navigate = useNavigate();

  return(
    <Nav__Menu>
      <ul>
        <li onClick={() => { navigate('/')} }>찾아보기</li>
        <li onClick={() => { navigate('/community')} }>커뮤니티</li>
        <li>글등록</li>
      </ul>
    </Nav__Menu>
  )
}

/* 네비게이션 바 */
const Nav__Menu = styled.nav` 
width: auto;

& > ul {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  list-style: none;  
  gap: 50px;

  & > li {
    color: #FDFBF8;
    font-size: 1.8rem;
    font-weight: 700;
    text-align: center;
    padding: 10px 4.5px;
    border-radius: 8px;
    white-space: nowrap;
    cursor: pointer;

    &:hover {
      background-color: #FDFBF8;
      color: #FF6F3D;
    }
  }
}

@media screen and (max-width: 768px) { 
  width: 100%;
  height: auto; 
  padding: 8.5px 0 9.5px 0;
  overflow: auto;
  z-index: 1;

  & > ul {
    gap: 7vw;
    & > li {
      font-size: 1.2rem;
      padding: 4px 10px;
      border-radius: 4px;
    }
  }
} 

`

export default Navbar;