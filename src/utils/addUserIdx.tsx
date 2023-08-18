export const addUserIdx = (existVals: {}) => {
  const userIdx = localStorage.getItem('userIdx');

  // userIdx 추가해주는 작업
  let changedVals = {
    ...existVals,
    userIdx: userIdx
  }

  return changedVals
}