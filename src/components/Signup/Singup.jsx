import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialState = {
    email:'',
    name:'',
    password:'',
    confirmpassword:'',
    address:'',
    phone:'',
  }
  const [signup, setSignup] = useState(initialState);

  const onChangeHandler = (e) => {
    const {name, value} = e.target;
    setSignup({...signup, [name]: value,});
  };

  const onSaveBtnHandler = ()=> {
    // dispatch(__updateUserInfo(newInfo));
    // alert('회원정보 수정 완료') 이 부분은 모듈에서...
    console.log(signup);
    navigate('/')
    setSignup(initialState);
  }; 

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
            <input 
            required
            type='email'
            placeholder='onemorebag@naver.com'
            name='email'
            value={signup.email}
            onChange={onChangeHandler}
            />

            <div>비밀번호 <span style={{color:'#FF6200'}}>*필수</span></div>
            <input 
            type="password"
            id="password" 
            name="password" 
            value={signup.password}
            onChange={onChangeHandler}
            // fw-filter="isFill&amp;isMin[4]&amp;isMax[16]" 
            minLength={10} 
            maxLength={16} 
            />

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
            required
            type="password"
            id="confirmpassword" 
            name="confirmpassword" 
            value={signup.confirmpassword}
            onChange={onChangeHandler} 
            minLength={10} 
            maxLength={16} 
            />

            <div>이름 <span style={{color:'#FF6200'}}>*필수</span></div>
            <input
            required
            name='name'
            value={signup.name}
            onChange={onChangeHandler}
            />

            <div>주소 <span style={{color:'#FF6200'}}>*필수</span></div>
            <input 
            required
            name='address'
            value={signup.address}
            onChange={onChangeHandler}
            />

            <div>휴대전화 <span style={{color:'#FF6200'}}>*필수</span></div>
            <input 
            required
            name='phone'
            value={signup.phone}
            onChange={onChangeHandler}
            />

            <p></p>

            <Btns>
                <button
                style={{ backgroundColor: 'white', border: '1px solid black' }}
                onClick={()=>window.location.reload()}
                >
                취소
                </button>
                <button style={{ color: 'white', backgroundColor: 'black' }}
                onClick={onSaveBtnHandler}
                >
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
  grid-auto-rows: minmax(auto);
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
    padding: 0 10px;
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