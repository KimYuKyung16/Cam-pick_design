/**
 * 회원가입 페이지
 * 
 */

import { useEffect, useState } from 'react';

import Footer from '../components/layout/footer';

import * as RegisterStyle from "../styles/register/registerStyle"; // 회원가입 스타일
import color from '../styles/color'; // 색감 정보

import { register } from "../apis/api/user";
import { validateId, validatePw, validateNickname } from "../utils/validateUserInfo";
import { removeSpace } from "../utils/removeSpace";



function Register() {

  interface I_Id {
    id: string,
    errorMessage: string
  }

  interface INickname { // 닉네임
    value: string,
    length: number,
    color: string
  }

  interface IPassword { // 패스워드
    pw: string,
    compare_pw: string | null
  }

  interface INoticeState { // 안내 문구 상태
    id: string,
    pw: string,
    compare_pw: string
  }

  interface ICorrectState {
    id: boolean,
    pw: boolean,
    compare_pw: boolean,
    nickname: boolean
  }

  // interface IPasswordType {
  //   pw: string,
  //   compare_pw: string
  // }
  
  const nicknameLimit = 20; // 닉네임 길이 제한

  let [id, setID] = useState<I_Id>({id:'', errorMessage:'영문 소문자로 시작하는 4~20자 영문자 또는 숫자를 입력하세요'});
  let [pw, setPW] = useState<IPassword>( {pw: '', compare_pw: null} );
  let [nickname, setNickname] = useState<INickname>( {value:'', length: 0, color:'#FF1E1E'} );
  let [introduction, setIntroduction] = useState<string>('');
  let [email, setEmail] = useState<string>('');

  let [correctState, setCorrectState] = useState<ICorrectState>( {id: false, pw: false, compare_pw: true, nickname: false} );
  let [btnState, setBtnState] = useState<boolean>(false);

  let [pwType, setPwType] = useState<string>('password'); // 패스워드 type 설정
  let [comparePwType, setComparePwType] = useState<string>('password'); // 패스워드 type 설정

  const onChangeId = (e: React.ChangeEvent<HTMLInputElement>) => { 
    e.target.value = removeSpace(e.target.value); // 공백있을 경우: 공백 먼저 제거하기
    setID({id: e.target.value, errorMessage: '영문 소문자로 시작하는 4~20자 영문자 또는 숫자를 입력하세요'});

    if (validateId(e.target.value)) {
      setCorrectState((val) => ({...val, id: true}));
    } else {
      setCorrectState((val) => ({...val, id: false}));
    }
  }

  const onChangePw = (e: React.ChangeEvent<HTMLInputElement>) => { 
    setPW((val) => ({...val, pw:e.target.value}));
    if (validatePw(e.target.value)) {
      setCorrectState((val) => ({...val, pw: true}));
    } else {
      setCorrectState((val) => ({...val, pw: false}));
    }
  }; 

  const onChangeComparePw = (e: React.ChangeEvent<HTMLInputElement>) => { 
    setPW((val) => ({...val, compare_pw:e.target.value})) 
    if (!e.target.value.length || pw.pw === e.target.value) {
      setCorrectState((val) => ({...val, compare_pw: true}));
    } else {
      setCorrectState((val) => ({...val, compare_pw: false}));
    }
  }; 

  const onChangeNickname = (e: React.ChangeEvent<HTMLInputElement>) => { 
    setNickname((val) => ({...val, value: e.target.value, length: e.target.value.length}));
    if (validateNickname(e.target.value)) {
      setCorrectState((val) => ({...val, nickname: true}));
      setNickname((val) => ({...val, color: '#A8A8A8'}));
    } else {
      setCorrectState((val) => ({...val, nickname: false}));
      setNickname((val) => ({...val, color: '#FF1E1E'}));
    }
  };

  const onChangeIntroduction = (e: React.ChangeEvent<HTMLTextAreaElement>) => { setIntroduction(e.target.value) };

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => { setEmail(e.target.value) };


  const click_RegisterBtn = async () => {
    if (correctState.id && correctState.pw && correctState.compare_pw && pw.compare_pw && correctState.nickname) {
      const registerState = await register({
        uniqueId: id.id,
        password: pw.pw,
        nickname: nickname.value,
        introduce: introduction,
        email,
      });
      console.log(registerState)
    } 
  }

  /* 패스워드 타입 변경 */
  const changePwType = (type: string) => {
    if (type === 'pwType') {
      if (pwType === 'text') setPwType('password');
      else setPwType('text');
    } else {
      if (comparePwType === 'text') setComparePwType('password');
      else setComparePwType('text');
    }
  }

  useEffect(() => {
    if (correctState.id && correctState.pw && correctState.compare_pw && pw.compare_pw && correctState.nickname) setBtnState(true);
    else setBtnState(false);
  }, [correctState])

   return(
    <RegisterStyle.Container>
      <RegisterStyle.Contents>
        <h2>로고 위치</h2>
        
        <RegisterStyle.Contents__component color={'#FF1E1E'} state={correctState.id}>
          <p>(필수) 아이디</p>
          <RegisterStyle.Container__input type="text" maxLength={20} onChange={onChangeId}/>
          <p>{id.errorMessage}</p>
        </RegisterStyle.Contents__component>

        <RegisterStyle.Contents__component color={'#433FFF'} state={correctState.pw}>
          <p>(필수) 비밀번호</p>
          <RegisterStyle.Container__Password tabIndex={0} type={pwType}>
            <input type={pwType} maxLength={15} onChange={onChangePw}/>
            <img src="/image/password_eye_icon.svg" onClick={()=>{changePwType('pwType')}}/>
            <img src="/image/password_eye_icon_focus.svg" onClick={()=>{changePwType('pwType')}}/>
            <img src="/image/password_closedeye_icon.svg" onClick={()=>{changePwType('pwType')}}/>
          </RegisterStyle.Container__Password>
          <p>공백 없이 8~15자 영문자, 숫자 또는 특수기호를 입력하세요</p>
        </RegisterStyle.Contents__component>

        <RegisterStyle.Contents__component color={'#FF1E1E'} state={correctState.compare_pw}>
          <p>(필수) 비밀번호 확인</p>
          <RegisterStyle.Container__Password tabIndex={0} type={comparePwType}>
            <input type={comparePwType} maxLength={15} onChange={onChangeComparePw}/>
            <img src="/image/password_eye_icon.svg" onClick={()=>{changePwType('comparePwType')}}/>
            <img src="/image/password_eye_icon_focus.svg" onClick={()=>{changePwType('comparePwType')}}/>
            <img src="/image/password_closedeye_icon.svg" onClick={()=>{changePwType('comparePwType')}}/>
          </RegisterStyle.Container__Password>
          <p>비밀번호가 일치하지 않습니다.</p>
        </RegisterStyle.Contents__component>

        <RegisterStyle.Contents__component2 color={nickname.color} state={correctState.nickname}>
          <p>(필수) 닉네임</p>
          <div>
            <RegisterStyle.Container__input type="text" onChange={onChangeNickname} maxLength={nicknameLimit}/>
            <p>{nickname.length}/{nicknameLimit}</p>
          </div>
        </RegisterStyle.Contents__component2>

        <RegisterStyle.Contents__component2>
          <p>(선택) 자기소개 <span>모임신청 시 모임장에게 자동으로 전송됩니다.</span></p>
          <textarea onChange={onChangeIntroduction}/>
        </RegisterStyle.Contents__component2>

        <RegisterStyle.Contents__component2>
          <p>(선택) 이메일</p>
          <RegisterStyle.Container__input type="email" onChange={onChangeEmail}/>
        </RegisterStyle.Contents__component2>
                
        <RegisterStyle.Container__Btn type="button" value="가입하기" onClick={click_RegisterBtn} state={btnState}/>

      </RegisterStyle.Contents>
      <Footer background={color.white}/>
    </RegisterStyle.Container>
  );
}

 
 export default Register;