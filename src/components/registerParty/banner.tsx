import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { partyInfoActions } from '../../redux/modules/party';

import styled from "styled-components";

import * as BannerStyle from '../../styles/registerParty/bannerStyle';

function Banner() {
  const dispatch = useAppDispatch();

  let [existBanner, setExistBanner] = useState("/image/backtest.jpg");

  const uploadBanner = (e: React.ChangeEvent<HTMLInputElement>) => {
    const upload_file = (e.target.files as FileList)[0];
    setExistBanner(URL.createObjectURL(upload_file));
    dispatch(partyInfoActions.setImageUrl(upload_file));

  }

  return(
    <BannerStyle.Container>
      <h2><span>모임을 나타내는</span><br/>사진을 설정해 주세요.</h2>
      <BannerStyle.Container__Banner>
        <img alt="profile" src={existBanner}/>
        <div>
        {/* < input type="button" value="이미지 찾기"/> */}
          <input type="file" accept=".jpg, .jpeg, .png" onChange={uploadBanner}/>
          <input type="button" value="삭제"/>
        </div>
      </BannerStyle.Container__Banner>
    </BannerStyle.Container>
  );
}



export default Banner;