import { authImageInstance } from '../utils/instance'

// 이미지를 저장할 때는 인증이 가능한 authImageInstance 사용
export const registerParty = async (partyVals: FormData) => { // 모임 글 등록
  try {
    const { data } = await authImageInstance.post(`/parties/new`, partyVals);
    return data
  } catch (e: any) {
    console.error(e);
    console.log(e.response.status);
  }
}
