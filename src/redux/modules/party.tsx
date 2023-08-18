import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface partyInfoState {
  title: string;
  tag: string;
  startDate?: string;
  dueDate?: string;
  capacity?: string;
  contents: string;
  imageUrl?: File;
}

const partyInfo_initialState: partyInfoState = {
  title: '',
  tag: '',
  contents: '',
  // imageUrl: undefined
}

const partyInfoSlice = createSlice({
  name: 'partyInfo', 
  initialState: partyInfo_initialState, 
  reducers:{ 
    setTitle(state, action: PayloadAction<string>){ 
      state.title = action.payload;
    },
    setTag(state, action: PayloadAction<string>) { 
      state.tag = action.payload;
    },
    setStartDate(state, action: PayloadAction<string>) { 
      state.startDate = action.payload;
    },
    setDueDate(state, action: PayloadAction<string>) { 
      state.dueDate = action.payload;
    },
    setCapacity(state, action: PayloadAction<string>) { 
      state.capacity = action.payload;
    },
    setContents(state, action: PayloadAction<string>) { 
      state.contents = action.payload;
    },
    setImageUrl(state, action: PayloadAction<File>) { 
      state.imageUrl = action.payload;
    }
  }
})

/* 액션 */
export const partyInfoActions = partyInfoSlice.actions;

/* 리듀서 */
export const partyInfoReducer = partyInfoSlice.reducer;