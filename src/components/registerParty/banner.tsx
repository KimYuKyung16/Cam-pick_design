import { useState } from "react";
import styled from "styled-components";

import * as BannerStyle from '../../styles/registerParty/bannerStyle';

function Banner() {

  return(
    <BannerStyle.Container>
      <h2><span>모임을 나타내는</span><br/>사진을 설정해 주세요.</h2>
      <BannerStyle.Container__Banner>
        <img alt="profile" src={"/image/backtest.jpg"}/>
        <div>
        < input type="button" value="이미지 찾기"/>
          {/* <input type="file" accept=".jpg, .jpeg, .png"/> */}
          <input type="button" value="삭제"/>
        </div>
      </BannerStyle.Container__Banner>
    </BannerStyle.Container>
  );
}



export default Banner;