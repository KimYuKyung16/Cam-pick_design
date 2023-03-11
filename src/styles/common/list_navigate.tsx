import styled from "styled-components";

const Mini_Navigate = styled.p`
align-self: flex-start;
font-size: 1.2rem;
color: #7A7A7A;
margin-bottom: 10px;

& > span:last-child {
  color: #FF6F3D;
}

@media screen and (max-width: 768px) { 
  font-size: 0.8rem;
  margin-bottom: 6px;
}
`

export default Mini_Navigate;