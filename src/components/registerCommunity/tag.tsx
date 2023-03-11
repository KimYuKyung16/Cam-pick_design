import styled from "styled-components";

import * as TagStyle from '../../styles/registerCommunity/tagStyle';

function Tags() {

  return(
    <TagStyle.Container>
      <TagStyle.Container__Tag>
        {
          new Array(3).fill(0).map((x) => {
            return (
              <TagStyle.Tag type="button" value="잡담"/> 
            )
          })
        }
      </TagStyle.Container__Tag>
    </TagStyle.Container>
  );
}



export default Tags;