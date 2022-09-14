import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import myinfoinnerStyles from'./MypageComponent.module.css';
import { __getMypageInfo, __updateUserInfo } from '../../redux/modules/mypage';
import { getCookie } from "../../shared/cookie";


const MypageComponent = () => {
  const dispatch = useDispatch();
  // const logIn = getCookie("ACCESS_TOKEN");
  const mypageInfo = useSelector((state) => state.mypage.mypageInfo);
  // console.log(mypageInfo);
  const initialState = {
    name: '',
    address: '',
    phone: '',
  };
  const [isEditMode,setIsEditMote] = useState(false); 
  const [newInfo, setNewinfo] = useState(initialState);
  // console.log(newInfo);
  
  useEffect(()=> {
    dispatch(__getMypageInfo());
    setNewinfo({
      name: mypageInfo?.name,
      address: mypageInfo?.address,
      phone: mypageInfo?.phone,
    });
  },[ mypageInfo?.name, mypageInfo?.address, mypageInfo?.phone ]);
  

  const onChangeHandler = (e) => {
    const {name, value} = e.target;
    setNewinfo({...newInfo, [name]: value});
  };

  const onSaveBtnHandler = ()=> {
    dispatch(__updateUserInfo(newInfo));
  }; 

  
    return (
      <>
        {/* { logIn === undefined ? 
        (<div style={{display:'flex', justifyContent:"center", marginTop: '200px', fontSize:'30px'}}>
          마이페이지 확인은 회원만 가능합니다.
          </div>)
        :( */}
          <Container>
          <Item1>
            <div>MY PAGE</div>
            <ul>
              {!isEditMode ? (
                <li style={{ fontWeight: 'bold' }}
                onClick={()=>{setIsEditMote(false)}}>내 정보</li>
              ): (
                <>
                <li>{mypageInfo?.name} 님은<br/>일반회원 입니다.</li><br/>
                <li onClick={()=>setIsEditMote(false)}>내 정보</li>
                </>
              )}
              <li>주문내역</li>
              <li>좋아요</li>
              <li>포인트</li>
              <li>쿠폰</li>
              <li>게시글</li>
              <li>주소록</li>
              {!isEditMode ? (
                <li onClick={()=>setIsEditMote(true)} >회원정보 수정</li>
              ): (
                <li
                style={{ fontWeight: 'bold' }}
                onClick={()=>setIsEditMote(true)}>회원정보 수정</li>
              )}            
            </ul>
          </Item1>
          <Item2>
          {!isEditMode ? (
            <MyInfoInnerContainer className={myinfoinnerStyles.innercontainer}>
              <MyInfoItem1 className={myinfoinnerStyles.inneritem1}>
                <div>
                  <div style={{color:'gray'}}>
                    <div style={{color:'black'}}>{mypageInfo?.name}&nbsp;</div> 님은&nbsp;  
                    <div style={{color:'black'}}>일반회원&nbsp;</div> 입니다.
                  </div>
                </div>
              </MyInfoItem1>
              <MyInfoItem2 className={myinfoinnerStyles.inneritem2}>
                <ul>
                  <li>적립금&emsp;&ensp; 2,000원</li>
                  <li>쿠폰&emsp;&ensp; 0개</li>
                  <li>좋아요&emsp;&ensp; 0개</li>
                </ul>
              </MyInfoItem2>
              <MyInfoItem3 className={myinfoinnerStyles.inneritem3}>
                <p>나의 주문처리 현황 <span>(최근 <span style={{color:'#FF6200'}}>3개월</span> 기준)</span> </p>
                <table>
                  <thead>
                  <tr>
                      <td>입금전<p></p><span style={{color:'#777777', fontSize:'30px'}}>0</span></td>
                      <td>배송준비중<p></p><span style={{color:'#777777', fontSize:'30px'}}>0</span></td>
                      <td>배송중<p></p><span style={{color:'#777777', fontSize:'30px'}}>0</span></td>
                      <td>배송완료<p></p><span style={{color:'#777777', fontSize:'30px'}}>0</span></td>
                      <td style={{borderRight: 'transparent'}}>
                        <ul>
                          <li>· 취소 : 0</li>
                          <li>· 교환 : 0</li>
                          <li>· 반품 : 0</li>
                        </ul>
                      </td>
                    </tr>
                  </thead>
                </table>
              </MyInfoItem3>
            </MyInfoInnerContainer>
              ): (
            <EditItem>
              <div>이름 <span style={{color:'#FF6200'}}>*필수</span></div>
              <input
              required
              name='name'
              value={newInfo.name}
              onChange={onChangeHandler}
              />
              <div>주소 <span style={{color:'#FF6200'}}>*필수</span></div>
              <input 
              required
              name='address'
              value={newInfo?.address}
              onChange={onChangeHandler}
              />
              <div>휴대전화 <span style={{color:'#FF6200'}}>*필수 11자리</span></div>
              <input 
              required
              name='phone'
              value={newInfo?.phone}
              onChange={(e)=> {setNewinfo({...newInfo, phone: e.target.value.replace(/[^0-9]/g, '')})}}
              minLength={11}
              maxLength={11}
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
                  onClick={onSaveBtnHandler}>
                  수정하기
                  </button>
              </Btns>
            </EditItem>
              )} 
          </Item2>
        </Container>
        {/* ) } */}
      </>
    );
}

export default MypageComponent;

// --------------------- 내 정보 & 회원정보 수정 ---------------------
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
  div, h3, input, button, ul, li{
    font-family: 'Gill Sans', 'Gill Sans MT', 'Lato', 'Noto Sans KR', Helvetica,
    Arial, sans-serif;
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
  p {
    font-size: 24px;
    line-height: 1;
    color: #5D5D5D;
  }
`;

// --------------------- 내 정보 ---------------------
const MyInfoInnerContainer = styled.div`
  div, h1, h2, h3, input, button{
    font-family: 'Gill Sans', 'Gill Sans MT', 'Lato', 'Noto Sans KR', Helvetica,
    Arial, sans-serif;
  }
`;

const MyInfoItem1 = styled.div`
  div, h1, h2, h3, strong, p, input, button{
    font-family: 'Gill Sans', 'Gill Sans MT', 'Lato', 'Noto Sans KR', Helvetica,
    Arial, sans-serif;
  }
  div {
    display: flex; 
    flex-direction: row; 
    align-items: center;
    font-size: 26px;
  }
`;

const MyInfoItem2 = styled.div`
  div, h1, h2, h3, ul, li, input, button{
    font-family: 'Gill Sans', 'Gill Sans MT', 'Lato', 'Noto Sans KR', Helvetica,
    Arial, sans-serif;
  }
  ul {
    font-size: 17px;
    margin-left: 0;
    padding-left: 0;
    list-style: none;
  }
  li {
    width: 400px;
    padding: 15px 0;
    border-bottom: 1px solid #D4D4D4;
    font-size: 15px;
  }
`;

const MyInfoItem3 = styled.div`
display: flex;
flex-direction: column;
justify-items: flex-start;
  div, h1, h2, h3, span, input, button, p, table, th, td, li{
    font-family: 'Gill Sans', 'Gill Sans MT', 'Lato', 'Noto Sans KR', Helvetica,
    Arial, sans-serif;
  }
  p {
    color: black;
    font-size: 22px;
  }
  span {
    font-weight: normal;
    font-size: 16px;
  }
  table {
    width: 900px;
  }
  th, td {
    width: 20%;
    border-right: 1px dotted #c2c2c2;
    text-align: center;
    font-weight: bold;
    font-size: 16px;
  }
  li {
    font-size: 14px;
    font-weight: normal;
    letter-spacing: 0.04em;
    word-spacing: 4px;
    list-style: none;
  }
`;

// --------------------- 회원정보 수정 ---------------------
const EditItem = styled.div`
  div, h3, input, button, span {
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

const Btns = styled.div`
  display: flex;
  justify-content: space-between;
  button {
    margin: 0 5px;
  }
`;