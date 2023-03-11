import styled from "styled-components";

export const Container = styled.section`
display: flex;
flex-direction: row;
width: 100%;
height: auto;
min-height: 100px;
position: relative;
gap: 16px;

@media screen and (max-width: 768px) { 
  flex-direction: column;
  align-items: center;
  gap: 7px;
}
`

/* 프로필 */
export const Container__Profile = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 15%;

& > img { // 프로필 이미지
  height: 100px;
  width: 100px;
  object-fit: cover;
  border-radius: 8px;
}

& > p { // 닉네임
  color: #2C2C2C;
  font-weight: 700;
  font-size: 1.6rem;
  padding-top: 8px;
  padding-bottom: 12px;
}

& > input { // 이미지 변경 버튼
  text-align: center;
  background: #E8E8E8;
  color: #7A7A7A;
  font-size: 1.2rem;
  font-weight: 500;
  padding: 4px 8px;
  border: none;
  border-radius: 4px;
}

@media screen and (max-width: 768px) { 
  & > img { // 프로필 이미지
    width: 74px;
    height: 74px;
    border-radius: 4px;
  }

  & > p { // 닉네임
    font-size: 1.2rem;
    padding-bottom: 8px;
    white-space: nowrap;
  }

  & > input { // 이미지 변경 버튼
    font-size: 1rem;
    padding: 4px;
  }
}
`

/* 자기소개 & 이메일 */
export const Container__Info = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
height: auto;
width: 100%;
background: #FDFBF8;
border: 1px solid #E8D9D4;
border-radius: 8px;

& > hr {
  align-self: center;
  width: 95%;
  height: 1px;
  background-color: #E8E8E8;
  border: none;
}
` 

/* 자기소개 */
export const Introduction = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: 100%;
height: 50%;
padding: 16px;
gap: 2px;

& > h5 {
  color: #7A7A7A;
  font-weight: 500;
  font-size: 1.6rem;
}

& > p { // 소개글
  color: #2C2C2C;
  font-weight: 500;
  font-size: 1.6rem;
}

@media screen and (max-width: 768px) { 
  padding: 8px;

  & > h5, p { font-size: 1.2rem; }
}
`

/* 이메일 */
export const Email = styled.div`
display: flex;
flex-direction: column; 
justify-content: center;
height: 50%;
padding: 16px;
gap: 2px;

& > h5 {
  font-weight: 500;
  font-size: 1.6rem;
  color: #7A7A7A;
}

& > div {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  & > p { // 이메일
    color: #FF6F3D;
    font-weight: 500;
    font-size: 1.6rem;
    overflow: auto;
  }

  & > input { // 회원정보 수정 버튼
    text-align: center;
    background: #E8E8E8;
    color: #7A7A7A;
    font-size: 1.2rem;
    font-weight: 500;
    border: none;
    border-radius: 4px;
    padding: 4px 8px;
    overflow: auto;
  }
}

@media screen and (max-width: 768px) { 
  padding: 8px;

  & > h5 { font-size: 1.2rem; }

  & div {
    & > p { font-size: 1.2rem; } // 이메일
    & > input { font-size: 1rem; } // 회원정보 수정 버튼
  }
}
`
