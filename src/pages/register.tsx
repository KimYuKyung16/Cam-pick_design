/**
 * 회원가입 페이지
 * 
 */

import { useState } from 'react';

import Footer from '../components/layout/footer';

import * as RegisterStyle from "../styles/register/registerStyle"; // 회원가입 스타일
import color from '../styles/color'; // 색감 정보


function Register() {


   return(
    <RegisterStyle.Container>
      <RegisterStyle.Contents>
        <h2>로고 위치</h2>
        
        <RegisterStyle.Contents__component color={'#FF1E1E'}>
          <p>(필수) 아이디</p>
          <RegisterStyle.Container__input type="text" onChange={onChangeId}/>
          <p>사용 중인 아이디입니다.</p>
        </RegisterStyle.Contents__component>

        <RegisterStyle.Contents__component color={'blue'}>
          <p>(필수) 비밀번호</p>
          <RegisterStyle.Container__input type="password" onChange={onChangePw}/>
          <p>8~20자 영문을 사용하세요</p>
        </RegisterStyle.Contents__component>

        <RegisterStyle.Contents__component color={'#FF1E1E'}>
          <p>(필수) 비밀번호 확인</p>
          <RegisterStyle.Container__input type="password" onChange={onChangeComparePw}/>
          <p>비밀번호가 일치하지 않습니다.</p>
        </RegisterStyle.Contents__component>

        <RegisterStyle.Contents__component2>
          <p>(필수) 닉네임</p>
          <div>
            <RegisterStyle.Container__input type="text" onChange={onChangeNickname}/>
            <p>{nickname.length}/7</p>
          </div>

        </RegisterStyle.Contents__component2>

        <RegisterStyle.Contents__component2>
          <p>(선택) 자기소개 <span>모임신청 시 모임장에게 자동으로 전송됩니다.</span></p>
          <textarea />
        </RegisterStyle.Contents__component2>

        <RegisterStyle.Contents__component2>
          <p>(선택) 이메일</p>
          <RegisterStyle.Container__input type="text"/>
        </RegisterStyle.Contents__component2>
                
        <RegisterStyle.Container__Btn type="button" value="가입하기"/>

      </RegisterStyle.Contents>
      <Footer background={color.white}/>
    </RegisterStyle.Container>
  );
}

 
 export default Register;