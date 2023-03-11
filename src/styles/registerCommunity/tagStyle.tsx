import styled from "styled-components";

export const Container = styled.section`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
width: 100%;
height: auto;
`

/* 태그들 */
export const Container__Tag = styled.div`
display: flex;
flex-direction: row;
width: 100%;
flex-wrap: wrap;
gap: 4px;
`

/* 태그 */
export const Tag = styled.input`
background-color: #FDFBF8;
color: #FF6F3D;
font-weight: 500;
font-size: 1.6rem;
padding: 10px 25px;
border: none;
border-radius: 8px;
cursor: pointer;

&:hover {
  background-color: #FF6F3D;
  color: #FDFBF8;
}

@media screen and (max-width: 768px) { 
  font-size: 1rem;
  padding: 4px 12px;
  border-radius: 4px;
} 
`
