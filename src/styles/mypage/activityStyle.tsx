import styled from "styled-components";

export const Container = styled.section`
display: flex;
flex-direction: row;
width: 100%;
height: auto;
position: relative;
gap: 20px;

@media screen and (max-width: 768px) { 
  flex-direction: column;
  gap: 16px;
}
`

/* 활동 */
export const Container__Activity = styled.div`
width: 100%;
color: #2C2C2C;

& > h2 {
  font-weight: 700;
  font-size: 1.8rem;
  padding-bottom: 20px;
}

& > ul { // 활동 내역들
  background: #FDFBF8;
  border: 1px solid #E8D9D4;
  border-radius: 8px;
  list-style: none;

  & > li {
    padding: 16px;
    border-bottom: 1px solid #E8D9D4;
    font-weight: 500;
    font-size: 1.6rem;
    
    :last-child {
      border-bottom: none;
    }
  }
}

@media screen and (max-width: 768px) { 
  & > h2 {
    font-size: 1.2rem;
    padding-bottom: 8px;
  }
  
  & > ul {
    & > li {
      font-size: 1.2rem;
      padding: 8px;
    }
  }
}
`
