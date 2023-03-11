import styled from "styled-components";

import * as PartyStyle from '../../styles/common/party';
import * as Btn from "../../styles/common/revise_delete_Btn";

function List() {

  return(
    <PartyStyle.Container>
      {
        new Array(5).fill(0).map((x) => {
          return (
            <PartyStyle.Container__Party>
              <PartyStyle.Container__Banner>
                <div></div> {/* 이미지 백그라운드 */}
              </PartyStyle.Container__Banner>
              <PartyStyle.Container__Info>
                <PartyStyle.Container__Info_name_tag>
                  <h3>짱 배드민턴 모임</h3>
                  <div>
                    {
                      new Array(3).fill(0).map((x) => {
                        return (
                          <input type="button" value="운동"/>
                        )
                      })
                    }
                    <PartyStyle.Revise_Delete_Btn>
                      <Btn.Revise_Delete_Btn>
                        <input type="button" value="수정"/>
                        <input type="button" value="삭제"/>
                      </Btn.Revise_Delete_Btn>
                    </PartyStyle.Revise_Delete_Btn>
                  </div>
                </PartyStyle.Container__Info_name_tag>
                <hr />
                <PartyStyle.Container__Info_personnel_period_introduction>
                  <PartyStyle.Personnel_Period>
                    <div>
                      <input type="button" value="모집인원"/>
                      <p>12명</p>
                    </div>
                    <div>
                      <input type="button" value="모집기간"/>
                      <p>2023-02-04 ~ 2023-02-04</p>
                    </div>
                  </PartyStyle.Personnel_Period>
                  <PartyStyle.Introduction>
                    
                  </PartyStyle.Introduction>
                </PartyStyle.Container__Info_personnel_period_introduction>
              </PartyStyle.Container__Info>
            </PartyStyle.Container__Party>
          )
        })
      }

    </PartyStyle.Container>
  )
}


export default List;