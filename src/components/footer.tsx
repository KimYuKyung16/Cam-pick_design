import styled from "styled-components";

type Props = {
  background: string | undefined // 바탕색
}

function Footer(props: Props) {

  return(
    <Foot {...props}>
      <p>Copyright © Team Goguma. All rights reserved.</p>
    </Foot>
  );
}

const Foot = styled.footer`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 54px;
background-color: ${(props: Props) => props.background};
color: #7A7A7A;
font-size: 1.2rem;
font-weight: 500;
line-height: 14px;
border-top: 1px solid #E8D9D4; // 선
`

export default Footer;