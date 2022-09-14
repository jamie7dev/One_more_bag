import React, {useState} from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

import { __getDetailInfo } from '../../redux/modules/detail';
import { instance } from '../../shared/api';
import { getCookie } from "../../shared/cookie";


const Detail = () => { 
  // const [show, setShow] = useState(false);
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const {id} = useParams();
   const logIn = getCookie("ACCESS_TOKEN") || localStorage.getItem("ACCESS_TOKEN")

  const detailInfo = useSelector((state)=> state.detail.detailInfo);
  // detailInfo에는 id가 없음
  // console.log(detailInfo);

  useEffect(()=> {
    dispatch(__getDetailInfo(id));
  }, []);
  
  const addBag = async() =>{
    if (!logIn) {
      return alert('회원만 가능한 기능입니다.')
    }
    let a = await instance.post(`api/member/cart/${id}`);
    console.log(a)
    navigate("/cart")
  }
  console.log(detailInfo)
  return(
    <>
      <Container>
        <Left>
          <img alt='' src={detailInfo.imgUrl} width="680px" />
        </Left>
        <Right>
          <RightTop>
            <Brand>
              <h3>{detailInfo.brand}</h3>
              <div>
                <img alt='' src="https://onemorebag.kr/web/imgs/brand-home@2x.png" width="20px" height="20px"/>
                <p>Brand</p>
              </div>
            </Brand>
            <ItemTitle>{detailInfo.title}</ItemTitle>
            <ItemPrice>
              <p>{detailInfo.cost}원</p>
              <img alt='' src ="https://onemorebag.kr/web/upload/icon_201909191819336000.png" width="20px" height="20px" />
            </ItemPrice>
            <DtDesc>
              <div>
                <h5>DETAILS</h5>
                <p>{detailInfo.desc}</p>
              </div>
              <div>
                <h5>POINT</h5>
                <p>{detailInfo.point}</p>
              </div>
              <div>
                <h5>재고 수량</h5>
                <p>{detailInfo.cnt}</p>
              </div>
              <div>
                {/* <h5>색상</h5>                
                <select name="item-color" onChange={()=>{setShow(!show)}}>
                    <option value="">- 옵션을 선택해 주세요 -</option>
                    <option value="베이지">베이지</option>
                    <option value="딥브라운">딥브라운</option>
                </select> */}
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
              <p style={{fontSize:"20px", paddingTop:"5px"}}>{detailInfo.cost}원</p>              
          </TotalPrice>
          <Bottom>
            
            <div>
              <p>🚚1~3 영업일 이내 출고 🛎5만원 이상 주문 시 무료배송</p>
              <button type="button" style={{backgroundColor:"white"}} onClick={()=>{addBag()}}>ADD TO BAG</button>
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
  width: 440px;
  height: 44px;
  border: 1.5px solid #D4D4D4;
  justify-content: space-between;
  align-items: center;
  padding: 0 12px;
  h3{
    padding-top: 14px;
    font-size: 19px;
    font-weight: bold;
  }
  div {
    /* background-color: green; */
    display: flex;
    width: 80px;
    height: 44px;
    padding: 3%;
    border-left: 1.5px solid #D4D4D4;
    p {
      line-height: 0px;
      padding: 12px 5px 0 5px;
      font-size: 15px;
      font-family: "GillSansMTPro-Medium";
      font-weight: bold;
      letter-spacing: 0.8px;
    }
  }
`
const ItemTitle = styled.p`
  color: #5D5D5D;
  font-size: 16px;
  padding: 30px 0;
  letter-spacing: 0.5px;
`
const ItemPrice = styled.div`
  display: flex;
  height: 38px;
  border-bottom: 1.5px solid #D4D4D4;
  justify-content: space-between;
  p {
    font-size: 24px;
    line-height: 24px;
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
    padding-top: 15px;
  }
  p {
    width: 100%;
    position: absolute;
    left: 120px;
    font-size: 13px;
    padding-top: 12px;
  }
  select {
    width: 400px;
    height: 38px;
    padding: 5px 0 0 5px;
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
  padding: 10px 0 0 280px;
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