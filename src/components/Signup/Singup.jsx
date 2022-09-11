import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Signup = () => {
    const navigate = useNavigate();

    return (
        <Container>
            <Item1>
            <div>SIGN UP</div>
            <ul>
                <li onClick={()=>{navigate('/login')}}>로그인</li>
                <li style={{ fontWeight: 'bold' }}
                onClick={()=>{navigate('/signup')}}>회원가입</li>
                <li>비회원 주문조회</li>
                <li>아이디 찾기</li>
                <li>비밀번호 찾기</li>
            </ul>
            </Item1>

            <Item2>
            <div>아이디 (이메일 형식) <span style={{color:'#FF6200'}}>*필수</span></div>
            <input placeholder='ex) onemorebag@naver.com'/>
            <div>비밀번호 <span style={{color:'#FF6200'}}>*필수</span></div>
            <input 
            id="passwd" 
            name="passwd" 
            fw-filter="isFill&amp;isMin[4]&amp;isMax[16]" 
            fw-label="비밀번호" 
            fw-msg="" 
            autocomplete="off" 
            maxlength="16" 
            type="password"/>
            <TypeUpper>
                <div>
                <strong>※ 비밀번호 입력 조건</strong>
                <ul>
                    - 대소문자/숫자/특수문자 중 2가지 이상 조합, 10자~16자
                    <br/>
                    - 입력 가능 특수문자 
                    <br/>
                    ~ ` ! @ # $ % ^ ( ) _ - = { } [ ] | ; : < > , . ? /</> 
                    <br/>
                    - 공백 입력 불가능
                </ul>
                </div>
                <a>x</a>
            </TypeUpper>
            <div>비밀번호 확인 <span style={{color:'#FF6200'}}>*필수</span></div>
            <input 
            id="passwd" 
            name="passwd" 
            fw-filter="isFill&amp;isMin[4]&amp;isMax[16]" 
            fw-label="비밀번호" 
            fw-msg="" 
            autocomplete="off" 
            maxlength="16" 
            type="password"/>
            <div>주소 <span style={{color:'#FF6200'}}>*필수</span></div>
            <input />
            <div>휴대전화 <span style={{color:'#FF6200'}}>*필수</span></div>
            <input />
            <div style={{ color: 'transparent' }}>empty</div>
            <Btns>
                <button
                style={{ backgroundColor: 'white', border: '1px solid black' }}
                onClick={()=>window.location.reload()}
                >
                취소
                </button>
                <button style={{ color: 'white', backgroundColor: 'black' }}
                onClick={()=> {navigate('/')}}>
                가입하기
                </button>
            </Btns>
            </Item2>
        </Container>
    );
}

export default Signup;

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
  div,
  ul,
  li {
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
  /* background-color: lightgreen; */
  grid-column: 2 / -1;
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1140px;
  margin: 0 auto;
  padding: 75px;
  font-size: 14px;
  div,
  h3,
  input,
  button,
  span {
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
    padding-left: 10px;
    :focus {
      outline: 1px solid;
    }
  }
  button {
    height: 50px;
    border: none;
    margin-bottom: 10px;
    font-size: 16px;
  }
`;

const TypeUpper = styled.div`
  left: 25px;
  bottom: 28px;
  width: 390px;
  top: auto;
  z-index: 2;
  position: absolute;
  padding: 15px;
  border: 1px solid #565960;
  background: #fff;
  -webkit-box-shadow: 3px 3px 3px 0px rgb(0 0 0 / 15%);
  line-height: 1.5;
  border-collapse: collapse;
  display: flex;
`;

const Btns = styled.div`
  display: flex;
  justify-content: space-between;
  button {
    margin: 0 5px;
  }
`;