/** 
 * 전역 스타일
 * 
 * */ 

 import { createGlobalStyle } from "styled-components";
 
 const GlobalStyle = createGlobalStyle`
   *, *::before, *::after {
     box-sizing: border-box;
     padding: 0;
     margin: 0;
   }

   input {
    outline: none;
   }

   textarea {
    resize: none;
    outline: none;
   }
   
   body {
    
   }
 `;
 
 export default GlobalStyle;