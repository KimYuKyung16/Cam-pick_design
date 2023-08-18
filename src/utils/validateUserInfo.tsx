/**
 * 아이디 유효성 검사
 * 4~20자, 영문자 소문자로 시작하고 영문자, 숫자 포함, 공백 불가능
 *  
 * */ 

export const validateId = (id: string): boolean => {
  const regexp = /^[a-z]+[a-z0-9]{3,19}$/g; 
  
  return regexp.test(id)
}

/**
 * 패스워드 유효성 검사
 * 8~15자, 영문자(대소문자), 숫자, 특수기호(!, @, #, $, %, ^, &, +, =) 포함, 공백 불가능
 *  
 * */ 
export const validatePw = (pw: string): boolean => {
  const regexp = /^.*(?=^.{8,15}$)/; // 나중에 수정하기 아래 정규식들은 제대로 안먹힘.
  // const regexp = /^.*(?=.{6,20})(?=.*[0-9])(?=.*[a-zA-Z]).*$/;
  // const regexp = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/g;
  // regexp = "^.*(?=^.{8,15}$)(?=.*\\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$")
  console.log(regexp.test(pw))
  return regexp.test(pw)
}

/**
 * 닉네임 유효성 검사
 * 4~20자, 영문자(대소문자), 한글, 숫자 포함
 *  
 * */ 
export const validateNickname = (nickname: string): boolean => {
  const regexp = /^[ㄱ-힣A-Za-z0-9]{3,20}$/g; 
  
  return regexp.test(nickname)
}