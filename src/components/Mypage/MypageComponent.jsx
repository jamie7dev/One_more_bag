import React, {useState} from 'react';
import styled from 'styled-components';
import myinfoinnerStyles from'./MyInfoInnerContainer.module.css';

const MypageComponent = () => {
    const [isEditMode,setIsEditMote] = useState(false); 
  
    return (
      <>
        <Container>
          <Item1>
            <div>MY PAGE</div>
            <ul>
              {!isEditMode ? (
                <li style={{ fontWeight: 'bold' }}
                onClick={()=>{setIsEditMote(false)}}>내 정보</li>
              ): (
                <li onClick={()=>setIsEditMote(false)}>내 정보</li>
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
            <MyInfoInnerContainer>
              <MyInfoItem1 className={myinfoinnerStyles.container}>
                <div className={myinfoinnerStyles.item}>
                  <p>
                    <strong style={{color:'black'}}>회원이름 </strong> 님은  
                    <strong style={{color:'black'}}> 일반회원 </strong> 입니다.
                  </p>
                </div>
              </MyInfoItem1>
              <MyInfoItem2>
  
              </MyInfoItem2>
              <MyInfoItem3>
  
              </MyInfoItem3>
            </MyInfoInnerContainer>
              ): (
                <h1>여기서 회원정보 수정을 해야함</h1>
              )} 
          </Item2>
        </Container>
      </>
    );
}

export default MypageComponent;

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
background-color: blue;
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
  p {
    font-size: 24px;
    line-height: 1;
    color: #5D5D5D;
  }
`;

const MyInfoInnerContainer = styled.div`

`;

const MyInfoItem1 = styled.div`
`;
const MyInfoItem2 = styled.div`
`;
const MyInfoItem3 = styled.div`
`;