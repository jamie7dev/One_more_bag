import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Detail = () => { 
  const [show, setShow] = useState(false);
  const navigate = useNavigate();


  return(
    <>
      <Container>
        <Left>
          <img src='https://onemorebag.kr/web/product/big/202209/7d914039fb18216dfa01e7ee6aca1789.jpg' width="680px" />
        </Left>
        <Right>
          <RightTop>
            <Brand>
              <h3>인더비기닝</h3>
              <div>
                <img src="https://onemorebag.kr/web/imgs/brand-home@2x.png" width="20px" height="20px"/>
                <p>Brand</p>
              </div>
            </Brand>
            <ItemTitle>fogni round pouch</ItemTitle>
            <ItemPrice>
              <p>18,000원</p>
              <img src ="https://onemorebag.kr/web/upload/icon_201909191819336000.png" width="20px" height="20px" />
            </ItemPrice>
            <DtDesc>
              <div>
                <h5>DETAILS</h5>
                <p>크기</p>
              </div>
              <div>
                <h5>POINT</h5>
                <p>80원</p>
              </div>
              <div>
                <h5>재고 수량</h5>
                <p>1</p>
              </div>
              <div>
                <h5>색상</h5>                
                <select name="item-color" onChange={()=>{setShow(!show)}}>
                    <option value="">- 옵션을 선택해 주세요 -</option>
                    <option value="베이지">베이지</option>
                    <option value="딥브라운">딥브라운</option>
                </select>
                {/* {show ?
                  <div>
                    <p>[인더비기닝] fogni round pouch</p>
                    <input type="number"></input>
                    <span className="number_price">18,000원</span>
                    <img src="https://img.echosting.cafe24.com/design/skin/default/product/btn_price_delete.gif" width="20px" height="20px"/>              
                  </div>
                :null
                } */}
              </div>              
            </DtDesc>
            
            
            
          </RightTop>
          <TotalPrice>
              <p style={{fontSize:"14px", paddingTop:"10px"}}>총 상품금액 :</p>
              <p style={{fontSize:"20px"}}>18,000원</p>              
          </TotalPrice>
          <Bottom>
            
            <div>
              <p>🚚1~3 영업일 이내 출고 🛎5만원 이상 주문 시 무료배송</p>
              <button type="button" style={{backgroundColor:"white"}} onClick={()=>{navigate('/cart')}}>ADD TO BAG</button>
              <button type="button" style={{backgroundColor:"black", color:"white"}} onClick={()=>{alert('아직 구현되지 않은 기능입니다😭')}}>BUY NOW</button>
            </div>
          </Bottom>
        </Right>        
      </Container>
    </>    
  );
};




export default Detail;

const Container = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 124px 2%;
  width: 1180px;
`

const Left = styled.div`
`

const Right = styled.div`
  width: 500px;
  padding-left: 60px;
`
const RightTop = styled.div`
  /* background-color: dodgerblue; */
`
const Brand = styled.div`
  display: flex;
  width: 470px;
  height: 40px;
  border: 1.5px solid #D4D4D4;
  justify-content: space-between;
  align-items: center;
  padding: 0 12px;
  div {
    display: flex;
    width: 64.031px;
    height: 15px;
    padding: 7px 20px 20px 20px;
    border-left: 1.5px solid #D4D4D4;
    p {
      line-height: 0px;
      padding-left: 10px;
      font-size: 15px;
      font-family: "GillSansMTPro-Medium";
      font-weight: bold;
      letter-spacing: 0.8px;
    }
    img {
      padding-top: 4px;
    }
  }
`
const ItemTitle = styled.p`
  color: #5D5D5D;
  font-size: 16px;
  padding: 20px 0 10px 0;
  letter-spacing: 0.5px;
`
const ItemPrice = styled.div`
  display: flex;
  height: 38px;
  padding-bottom: 10px;
  border-bottom: 1px solid #D4D4D4;
  justify-content: space-between;
  p {
    font-size: 24px;
    line-height: 0px;
  }
  img {
    padding-top: 12px;
  }
`


const DtDesc = styled.div`
  div {
    position: relative;
    display: flex;
  }
  h5 {
    width: 30%;
    font-size: 13px;
    font-weight: lighter;
    color: #555555;
    
  }
  p {
    width: 30%;
    position: absolute;
    right: 10px;
    font-size: 13px;
    padding-right: 200px;
    line-height: 34px;
  }
  select {
    width: 400px;
    height: 38px;
    padding-top: 5px;
    border: 1.5px solid #D4D4D4;
  }
`
// const OrderItem = styled.div`
//   margin: 40px 0;
//   display: none;
//   background-color: red;
//   p{
//     margin: 30px 60px;
//     width: 300px;
//   } 
// `

const TotalPrice = styled.div`
  display: flex;
  padding: 10px 0 0 350px;
`
const Bottom = styled.dt`
  position: relative;
  p {
    text-align: center;
    background-color: #8BDBFF;
    height: 40px;
    line-height: 45px;
    font-size: 16px;
    margin: 0 0 20px 0;
  }
  button{
    width: 50%;
    height: 60px;
    line-height: 60px;
    border: 1.5px solid black;
    font-size: 18px;
    font-weight: bold;
    letter-spacing: 1.5px;
    cursor: pointer;
  }
`
