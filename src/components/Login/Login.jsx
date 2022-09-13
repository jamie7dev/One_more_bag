import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { KAKAO_AUTH_URL } from "../../shared/OAuth";
import { __memberLogin } from '../../redux/modules/members'; 

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialState = {
    email:'',
    password:'',
  }
  const [login, setLogin] = useState(initialState);

  const onLoginBtnHandler = () => {
    if (login.email.trim() === "" || login.password.trim() === "")
    {return alert("이메일과 비밀번호를 입력하세요.")};
    dispatch(__memberLogin(login));
    navigate('/')
    setLogin(initialState);
  };


  return (
    <>
      <Container>
        <Item1>
          <div>LOGIN</div>
          <ul>
            <li style={{ fontWeight: 'bold' }}
            onClick={()=>{navigate('/login')}}>로그인</li>
            <li
            onClick={()=>{navigate('/signup')}}>회원가입</li>
            <li>비회원 주문조회</li>
            <li>아이디 찾기</li>
            <li>비밀번호 찾기</li>
          </ul>
        </Item1>
        <Item2>
          <div>아이디 (이메일 형식)</div>
          <input 
          required
          placeholder='onemorebag@naver.com'
          name='email'
          value={login.email}
          onChange={(e)=>setLogin({...login, email: e.target.value})}
          />
          <div>비밀번호</div>
          <input 
          required
          type='password'
          name='password'
          value={login.password}
          onChange={(e)=>setLogin({...login, password: e.target.value})}
          />
          <p></p>
          <button 
          style={{ color: 'white', backgroundColor: 'black' }}
          onClick={onLoginBtnHandler}
          >
            로그인
          </button>
          {/* <button style={{ color: 'white', backgroundColor: '#3EAF0E' }}>
            네이버 로그인
          </button> */}
          <button 
          onClick={()=>{window.location.href = KAKAO_AUTH_URL}} 
          style={{ backgroundColor: '#F5E006' }}>
            카카오 로그인</button>
          <h3>아직 회원이 아니신가요?</h3>
          <button
            style={{ backgroundColor: 'white', border: '1px solid black' }}
            onClick={()=> {navigate('/signup')}}
          >
            회원가입
          </button>
        </Item2>
      </Container>
    </>
  );
}

export default Login;

const Container = styled.div`
  display: grid;
  margin: 0 auto;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: minmax(auto);
  grid-column-gap: 10px;
  width: 1480px;
  padding: 50px 20px 100px 20px;
`;

const Item1 = styled.div`
/* background-color: yellow; */
  padding-left: 10px;
  div, ul, li{
    font-family: 'Gill Sans', 'Gill Sans MT', 'Lato', 'Noto Sans KR', Helvetica,
      Arial, sans-serif;
  }
  div {
    font-size: 31px;
    padding-bottom: 15px;
    letter-spacing: 3px;
  }
  ul {
    font-size: 17px;
    margin-left: 0;
    padding-left: 0;
    list-style: none;
  }
  li {
    padding-bottom: 11px;
    cursor: pointer;
  }
`;

const Item2 = styled.div`
/* background-color: blue; */
  grid-column: 2 / -1;
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1140px;
  margin: 0 auto;
  padding: 75px;
  font-size: 14px;
  div, h3, h4, h5, input, button{
    font-family: 'Gill Sans', 'Gill Sans MT', 'Lato', 'Noto Sans KR', Helvetica,
    Arial, sans-serif;
    width: 400px;
  }
  input {
    height: 45px;
    border: none;
    margin-bottom: 10px;
    background-color: #eee;
    font-size: 16px;
    padding: 0 10px;
  }
  button {
    height: 50px;
    border: none;
    margin-bottom: 10px;
    font-size: 16px;
  }
`;