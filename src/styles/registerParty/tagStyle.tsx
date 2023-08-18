import styled from "styled-components";

export const Container = styled.section`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
width: 100%;
height: auto;
position: relative;
gap: 10px;

& > h2 {
  width: 250px;
  color: #2C2C2C;
  font-weight: 500;
  font-size: 1.6rem;
  white-space: nowrap;

  & > span {
    color: #A8A8A8;
    font-weight: 500;
    font-size: 1.4rem;
  }
}

@media screen and (max-width: 768px) { 
  flex-direction: column;
  align-items: flex-start;

  & > h2 {
    font-size: 1.2rem;
    & > span { font-size: 1rem; }
  }

  & br:first-child { display: none; }
}
`

export const Container__Tag = styled.div`
display: flex;
flex-direction: row;
width: 100%;
max-width: 1049px;
flex-wrap: wrap;
gap: 20px;

@media screen and (max-width: 768px) { 
  gap: 4px;
}
`

interface ITagState {
  state: boolean
}

export const Tag = styled.input`
width: 82px;
height: 41px;
/* background: #FDFBF8;
color: #FF6F3D; */
background-color: ${(props:ITagState) => props.state ? "#FF6F3D" : "#FDFBF8"};
color: ${(props:ITagState) => props.state ? "#FDFBF8" : "#FF6F3D"};
font-weight: 700;
font-size: 1.8rem;
border-radius: 8px;
border: none;
cursor: pointer;

@media screen and (max-width: 768px) { 
  width: 42px;
  height: 20px;
  font-size: 1rem;
  border-radius: 4px;
}
`
