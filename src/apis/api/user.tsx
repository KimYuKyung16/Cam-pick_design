import { AxiosError } from 'axios';
import { defaultInstance, authInstance } from '../utils/instance'

interface IUserRegister { // 회원가입
  uniqueId: string,
  password: string,
  nickname: string,
  introduce?: string | undefined | null,
  email?: string | undefined | null,
}

interface IUserLogin { // 로그인
  uniqueId: string,
  password: string
}

export const register = async (userInfo: IUserRegister) => { // 회원가입
  try {
    const { data } = await defaultInstance.post(`/users/signup`, userInfo);
    return data
  } catch (e) {
    console.error(e);
  }
}

export const login = async (userInfo: IUserLogin) => { // 로그인
  try {
    const { data, status } = await defaultInstance.post(`/users/login`, userInfo);

    return { data, status }
  } catch (e: any) {
    console.log(e.response.data.error);
    console.log(e.response.status)
    // throw e;
  }
}

