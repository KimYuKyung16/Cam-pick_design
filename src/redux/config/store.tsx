import { configureStore } from "@reduxjs/toolkit";

import { persistStore } from 'redux-persist'; // persist-redux 추가
import storage from 'redux-persist/lib/storage'; // localstorage에 저장
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

import { commmunityContentReducer }  from '../modules/community'; // 커뮤니티 관련 reducer
import { partyInfoReducer }  from '../modules/party'; // 모임 관련 reducer
import { partyDetailModalReducer }  from '../modules/modal'; // 모달창 관련 reducer



const reducers = combineReducers({ 
  commmunityContent: commmunityContentReducer,
  partyInfo: partyInfoReducer,

  // 모달창 관련 리듀서들
  partyDetailModal: partyDetailModalReducer
});

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['commmunityContent', 'partyInfo', 'partyDetailModal'] // persist를 제외하고 싶은 부분
}

const persistedReducer = persistReducer(persistConfig, reducers);

// store 생성
export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store); 

export default { store, persistor }; 
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;