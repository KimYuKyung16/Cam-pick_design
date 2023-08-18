import CryptoJS from 'crypto-js';

export const decryptAccessToken = () => {
  const accessToken = localStorage.getItem('encryptedAccessToken');

  try {
    if (accessToken) {
      // Decrypt
      let bytes  = CryptoJS.AES.decrypt(accessToken as string, process.env.REACT_APP_AccessTokenSecretKey as string);
      let originalAccessToken = bytes.toString(CryptoJS.enc.Utf8);
      
      return originalAccessToken
    }
  } catch(e) {
    alert("localStorage를 임의로 변경한 흔적이 있습니다. 로그아웃됩니다.")
    localStorage.removeItem('accessToken');
    localStorage.removeItem('encryptedAccessToken');
    localStorage.removeItem('userIdx');
  }

}