import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface commmunityContentState {
  tag: string;
  title: string;
  content: string;
}

const commmunityContent_initialState: commmunityContentState = {
  tag: '1',
  title: '',
  content: ''
}

const commmunityContentSlice = createSlice({
  name: 'commmunityContent', 
  initialState: commmunityContent_initialState, 
  reducers:{ 
    setTag(state, action: PayloadAction<string>){
      state.tag = action.payload;
    },
    setTitle(state, action: PayloadAction<string>) { 
      state.title = action.payload;
    },
    setContent(state, action: PayloadAction<string>) { 
      state.content = action.payload;
    }
  }
})

/* 액션 */
export const commmunityContentActions = commmunityContentSlice.actions;

/* 리듀서 */
export const commmunityContentReducer = commmunityContentSlice.reducer;