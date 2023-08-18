import GlobalStyle from "../src/styles/GlobalStyle";
import { Routes, Route } from 'react-router-dom';

import Login from './pages/login';
import Register from "./pages/register";
import Party from "./pages/party";
import Community from "./pages/community";
import CommunityDetail from "./pages/communityDetail";

import RegisterParty from "./pages/registerParty";
import RegisterCommunity from "./pages/registerCommunity";

import MyPage from "./pages/mypage";
import MyPage_Community from "./pages/mypage_community";
import MyPage_Party from "./pages/mypage_party";
import MyPage_Notification from "./pages/mypage_notification";
import MyPage_Like from "./pages/mypage_like";

import Chat from "./pages/chat";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Party />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
  
        <Route path="/community" element={<Community />}></Route>
        <Route path="/community/1" element={<CommunityDetail />}></Route>

        <Route path="/party/register" element={<RegisterParty />}></Route>
        <Route path="/community/register" element={<RegisterCommunity />}></Route>
        
        <Route path="/mypage" element={<MyPage />}></Route>
        <Route path="/mypage/community" element={<MyPage_Community />}></Route>
        <Route path="/mypage/party" element={<MyPage_Party />}></Route>
        <Route path="/mypage/notification" element={<MyPage_Notification />}></Route>
        <Route path="/mypage/like" element={<MyPage_Like />}></Route>

        <Route path="/chat" element={<Chat />}></Route>
      </Routes>
    </>
  );
}

export default App;
