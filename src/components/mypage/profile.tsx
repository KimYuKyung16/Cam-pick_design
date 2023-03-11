import styled from "styled-components";
import * as ProfileStyle from '../../styles/mypage/profileStyle';

function Profile() {

  return(
    <ProfileStyle.Container>
      <ProfileStyle.Container__Profile>
          <img src="/image/backtest2.jpg"/>
          <p>지윤이 엄마</p>
          <input type="button" value="이미지 변경하기"/>
      </ProfileStyle.Container__Profile>

      <ProfileStyle.Container__Info>
        <ProfileStyle.Introduction>
          <h5>자기소개</h5>
          <p>안녕하세요. 두 아이를 키우고 있습니다. 배드민턴을 좋아하는 43세 아줌마입니다~</p>
        </ProfileStyle.Introduction>
        <hr />
        <ProfileStyle.Email>
          <h5>이메일</h5>
          <div>
            <p>hhhhhh@naver.com</p>
            <input type="button" value="회원정보 수정하기"/>
          </div>
        </ProfileStyle.Email>
      </ProfileStyle.Container__Info>

    </ProfileStyle.Container>
  );
}



export default Profile;