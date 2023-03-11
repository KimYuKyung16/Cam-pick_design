import styled from "styled-components";

export const Container = styled.section`
display: flex;
flex-direction: row;
width: 100%;
height: auto;
position: relative;
justify-content: space-between;
align-items: center;
`

/* 모집 작성글 내용 */
export const Container__Contents = styled.div`
display: flex;
flex-direction: column;
width: 100%;
border-radius: 12px;
overflow: hidden;

* {
  width: 100%;
  border: none;
}

& > input { // 제목
  background: #FDFBF8;
  font-weight: 500;
  font-size: 1.8rem;
  padding: 20px 16px;
  border-bottom: 1px solid #A8A8A8;

  ::placeholder {
    color: #A8A8A8;
  }
}

& > textarea { // 내용
  height: 477px;
  background: #FDFBF8;
  padding: 16px;
}

@media screen and (max-width: 768px) { 
  border-radius: 4px;

  & > input { // 제목
    padding: 10px 8px;
    font-size: 1.2rem;
  }
  
  & > textarea { // 내용
    height: 478px;
    padding: 8px;
  }
}
`
