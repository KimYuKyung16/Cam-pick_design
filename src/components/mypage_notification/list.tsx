import styled from "styled-components";

import * as ListStyle from '../../styles/mypage_notification/listStyle';

function List() {

  return(
    <ListStyle.Container>   
      <ListStyle.Container__List>
          {
            new Array(3).fill(0).map((x) => {
              return (
                <li>
                  <ListStyle.Notification>
                    <p>커뮤니티 글</p>
                    <div>
                      <p><span>댓글 | </span>맞아요 오늘 날씨가 참 좋아요~</p>
                    </div>
                  </ListStyle.Notification>
                </li>
              )
            })
          }
      </ListStyle.Container__List>
    </ListStyle.Container>
  );
}



export default List;