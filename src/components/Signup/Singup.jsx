import React, {useState} from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
// import axios from 'axios';
import { instance } from "../../shared/api";

import { _getMembersEmail } from '../../redux/modules/members'; 

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userEmailList = useSelector((state)=>state.members?.membersEmail);
  // console.log(userEmailList);

  const initialState = {
    email:'',
    name:'',
    password:'',
    passwordConfirm:'',
    address:'',
    phone:'',
  }
  const [member, setMember] = useState(initialState);

  useEffect(()=>{
    dispatch(_getMembersEmail());
  }, []);

  const onChangeHandler = (e) => {
    const {name, value} = e.target;
    setMember({...member, [name]: value,});
  };

  const onSaveBtnHandler = async ()=> {
        const {data} = await instance.post("api/member/signup", member);
        console.log(data);
        if (data.success) {
          alert('회원가입이 완료되었습니다. 로그인 후 이용바랍니다.');
          navigate('/');
        } else {
          window.alert(data.error.message)
        }
        setMember(initialState);
  }; 

  // 유효성 검사 이메일(아이디), 비밀번호, 휴대폰번호 정규표현식
  const sameIdList = userEmailList?.filter((email) => email.id === member.email );
  const regexEmailId = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
  const regexPassword = /^(?=.*?[a-zA-z])(?=.*?[0-9]).{4,12}$/;
  const regexPhone = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;

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
            value={member.email}
            onChange={onChangeHandler}
            />
            {/* sameIdList.length가 0이면 ? (없는 아이디라 아이디로 사용하기 위해서 유효성 검사 진행) : 이미있는아이디 */}
            {/* sameIdList.length가 0이면 ? (정규표현식 충족 ? 사용가능한 아이디 : 정규표현식 알려주기) : 이미있는아이디 */}
            { member.email && 
              (sameIdList?.length === 0 ? 
                ( regexEmailId.test(member.email) ? 
                  (<div style={{color:"green", fontSize:"14px"}}>아이디로 사용가능한 이메일입니다.</div>)
                  :
                  (<div style={{color:"red", fontSize:"14px"}}>아이디 입력 형식이 잘못되었습니다. <br/> 아이디를 이메일 형식으로 입력해주세요.</div>) 
                ) 
                : 
                (<div style={{color:"red", fontSize:"14px"}}>이미 사용중인 아이디입니다.</div>) 
              )
            }
            <p></p>

            <div>비밀번호 <span style={{color:'#FF6200'}}>*필수</span></div>
            <input 
            type="password"
            id="password" 
            name="password" 
            value={member.password}
            onChange={onChangeHandler}
            minLength={4} 
            maxLength={12} 
            />
            {
              member.password && 
              (regexPassword.test(member.password) ? 
              <div style={{color:"green", fontSize:"14px"}}>사용가능한 비밀번호 입니다</div> 
              : 
              <div style={{color:"red", fontSize:"14px"}}>비밀번호 입력 형식이 잘못되었습니다.(영문,숫자 포함 4~12 자리)</div>
              )
            }
            <p></p>

            <div>비밀번호 확인 <span style={{color:'#FF6200'}}>*필수</span></div>
            <input 
            required
            type="password"
            id="passwordConfirm" 
            name="passwordConfirm" 
            value={member.passwordConfirm}
            onChange={onChangeHandler} 
            minLength={4} 
            maxLength={12} 
            />
            {
              member.passwordConfirm && 
              (member.password !== member.passwordConfirm ? 
              <div style={{color:"red", fontSize:"14px"}}>비밀번호가 일치하지 않습니다</div> 
              : 
              <div style={{color:"green", fontSize:"14px"}}>비밀번호가 일치합니다</div>
              )
            }
            <p></p>

            <div>이름 <span style={{color:'#FF6200'}}>*필수</span></div>
            <input
            required
            name='name'
            value={member.name}
            onChange={onChangeHandler}
            />

            <div>주소 <span style={{color:'#FF6200'}}>*필수</span></div>
            <input 
            required
            name='address'
            value={member.address}
            onChange={onChangeHandler}
            />

            <div>휴대전화 <span style={{color:'#FF6200'}}>*필수</span></div>
            <input 
            required
            name='phone'
            value={member.phone}
            onChange={(e)=> {setMember({...member, phone: e.target.value.replace(/[^0-9]/g, '')})}}
            maxLength={11}
            />
            {
              member.phone && 
              (regexPhone.test(member.phone) ? 
              (<div style={{color:"green", fontSize:"14px"}}>사용가능한 휴대폰 번호입니다.</div>)
              : 
              (<div style={{color:"red", fontSize:"14px"}}>올바른 휴대폰 번호가 아닙니다.</div>) 
              )
            }
            
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

const Btns = styled.div`
  display: flex;
  justify-content: space-between;
  button {
    margin: 0 5px;
  }
`;

/* <TypeUpper>
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
</TypeUpper> */

// const TypeUpper = styled.div`
//   left: 25px;
//   bottom: 28px;
//   width: 390px;
//   top: auto;
//   z-index: 2;
//   position: absolute;
//   padding: 15px;
//   border: 1px solid #565960;
//   background: #fff;
//   -webkit-box-shadow: 3px 3px 3px 0px rgb(0 0 0 / 15%);
//   line-height: 1.5;
//   border-collapse: collapse;
//   display: flex;
// `;