import { authInstance } from '../utils/instance'

interface IRegisterCommunity { // 커뮤니티 글 등록 시 입력값
  tag: string,
  title: string,
  content: string
}

// 글을 저장할 때는 인증이 가능한 authInstance 사용
export const registerCommunity = async (boardVals: IRegisterCommunity) => { // 커뮤니티 글 등록
  try {
    const { data } = await authInstance.post(`/boards`);
    return data
  } catch (e) {
    console.error(e);
  }
}
