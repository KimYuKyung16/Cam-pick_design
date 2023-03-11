import styled from "styled-components";
import * as ActivityStyle from '../../styles/mypage/activityStyle';

function Activity() {

  return(
    <ActivityStyle.Container>   
      <ActivityStyle.Container__Activity>
        <h2>내 활동</h2>
        <ul>
          <li>모집 작성글</li>
          <li>커뮤니티 작성글</li>
          <li>알림 내역</li>
        </ul>
      </ActivityStyle.Container__Activity>

      <ActivityStyle.Container__Activity>
        <h2>커뮤니티 활동</h2>
        <ul>
          <li>좋아요 글 모음</li>
          <li>모임 신청 내역</li>
          <li>채팅 목록</li>
        </ul>
      </ActivityStyle.Container__Activity>
    </ActivityStyle.Container>
  );
}


export default Activity;