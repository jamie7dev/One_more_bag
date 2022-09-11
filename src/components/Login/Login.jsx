import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Login = () => {
    const navigate = useNavigate();

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
            <div>아이디</div>
            <input />
            <div>비밀번호</div>
            <input />
            <div style={{ color: 'transparent' }}>empty</div>
            <button style={{ color: 'white', backgroundColor: 'black' }}>
              로그인
            </button>
            <button style={{ color: 'white', backgroundColor: '#3EAF0E' }}>
              네이버 로그인
            </button>
            <button style={{ backgroundColor: '#F5E006' }}>카카오 로그인</button>
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
  grid-auto-rows: minmax(1530px, auto);
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
  div, h3, input, button{
    font-family: 'Gill Sans', 'Gill Sans MT', 'Lato', 'Noto Sans KR', Helvetica,
    Arial, sans-serif;
    width: 400px;
  }
  input {
    height: 45px;
    border: none;
    margin-bottom: 10px;
    background-color: #eee;
  }
  button {
    height: 50px;
    border: none;
    margin-bottom: 10px;
    font-size: 16px;
  }
`;