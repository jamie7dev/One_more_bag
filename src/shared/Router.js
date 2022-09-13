import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import SignupPage from "../pages/SignupPage";
import LoginPage from '../pages/LoginPage';
import Mypage from '../pages/MyPage';
import DetailPage from "../pages/DetailPage";
import CartPage from "../pages/CartPage";
import KaKao from '../components/Login/Kakao';


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />}/>
        <Route path='signup' element={<SignupPage />}/>
        <Route path='login' element={<LoginPage />}/>
        <Route path='mypage' element={<Mypage />}/>
        <Route path='detail' element={<DetailPage />}/>
        <Route path='cart' element={<CartPage />}/>
        <Route path="/auth/kakao/callback" element={<KaKao />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;