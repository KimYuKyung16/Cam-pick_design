import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";

import * as ListStyle from '../../styles/mypage_community/listStyle';
import * as Btn from "../../styles/common/revise_delete_Btn";

function List() {

  return(
    <ListStyle.Container>   
      <ListStyle.Container__List>
        <tbody>
          {
            new Array(10).fill(0).map((x) => {
              return (
                <tr>
                  <td>질문</td>
                  <td><Link to = ''>!!~~저희 모임 참여하실 분 구합니다</Link></td>
                  <td>
                    <Btn.Revise_Delete_Btn>
                      <input type="button" value="수정"/>
                      <input type="button" value="삭제"/>
                    </Btn.Revise_Delete_Btn>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </ListStyle.Container__List>
    </ListStyle.Container>
  );
}



export default List;