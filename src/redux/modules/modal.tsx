import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface partyDetailModalState {
  state: boolean;
}

const partyDetailModal_initialState: partyDetailModalState = {
  state: false
}

/**
 * 모임 상세 모달창의 diplay 상태 관리
 */
const partyDetailModalSlice = createSlice({
  name: 'partyDetailModal', 
  initialState: partyDetailModal_initialState, 
  reducers:{ 
    setState(state, action: PayloadAction<boolean>){ 
      state.state = action.payload;
    }
  }
})

/* 액션 */
export const partyDetailModalActions = partyDetailModalSlice.actions;

/* 리듀서 */
export const partyDetailModalReducer = partyDetailModalSlice.reducer;