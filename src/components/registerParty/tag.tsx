import styled from "styled-components";

import * as TagStyle from '../../styles/registerParty/tagStyle';

function Tags() {

  return(
    <TagStyle.Container>
      <h2>모임을 나타내는<br/>태그를 선택하세요.<br/><span>(중복 선택 가능)</span></h2>
      <TagStyle.Container__Tag>
        {
          new Array(9).fill(0).map((x) => {
            return (
              <TagStyle.Tag type="button" value="전체"/> 
            )
          })
        }
      </TagStyle.Container__Tag>
    </TagStyle.Container>
  );
}



export default Tags;