import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const List = () => {
  const navigate = useNavigate();

  return (
    <Stbody>
      <StCategory>
        <p>ALL</p>
        <p>💫BEST</p>
        <p>💝SPECIAL</p>
        <p>🎁GIFT</p>
        <p>BAG</p>
        <p>ACC</p>
        <p>STATIONERY</p>
        <p>DIGITAL</p>
        <p>DOLL</p>
        <p>HOME</p>
        <p>SALE</p>
        <p>COLLABO</p>
        <p>📍BRAND</p>
      </StCategory>
      <StWrap>
        <StSidebar>
          <div style={{fontSize:"34px", letterSpacing:"2.3px"}}>ALL</div>
          <div>
            <p style={{fontSize:"15px", letterSpacing:"1.8px", fontWeight:"bold", marginTop:"64px"}}>COLOR</p>
            <Color />
          </div>
        </StSidebar>
        <StContainer>
          <StFunction>
          <StTotal>TOTAL</StTotal>
          <Stfilter>          
            <p className="total">신상품</p>
            <p className="total">상품명</p>
            <p className="total">낮은가격</p>
            <p className="total">높은가격</p>
            <p className="total">제조사</p>
            <p className="total">사용후기</p>
          </Stfilter>
          </StFunction>        
        <StList>
          <ItemList />
        </StList>          
        </StContainer>
      </StWrap>
    </Stbody>
  );
};
const Color = () => {
  const arr = new Array(42).fill("");
  return  (
      <div style={{ display: "flex", flexWrap:"wrap"}}>
          {arr.map((a, key)=>{
              const color = "#"+(parseInt(Math.random()*0xffffff)).toString(16);
              return(
              <div className="item" key={key} style={{backgroundColor:color, borderRadius:"50%", width:"16px", height:"16px", margin:"6px", border:"1px solid #ddd"}}></div>
              )
          })}
      </div>
  )
}

const ItemList = () => {
  const itemList = new Array(30).fill("");
  return (
    <StList>
      {itemList.map((item, key) => (
          <div
            key={key}
            style={{ display:"grid", border:"1px solid black" }}
          >
            {item}
          </div>
        ))}
    </StList>
  )
}

export default List;

const Stbody = styled.div`
  max-width: 1480px;
  min-width: 1140px;
  margin: 0 auto;
  padding-left: 3%;
`

const StCategory = styled.div`
  display: flex;
  max-width: 1880px;
  min-width: 1140px;
  margin: 20px 0;
  justify-content: flex-start;
  flex-wrap: wrap;
  p {
    font-size: 26px;
    padding: 0 2.4%;
    letter-spacing: 1.5px;
    line-height: 2px;
    cursor: pointer;
  }
`

const StWrap = styled.div`
  /* box-sizing: border-box; */
  display: flex;
  justify-content: space-between;
  padding-top: 50px;
  padding-bottom: 100px;
`
const StSidebar = styled.div`
  width: 16.6666%;
`
const StContainer = styled.div`
  width: 83.3333%;
  padding-left: 1.8%;
`
const StFunction = styled.div`
  display: flex;
  justify-content: space-between;
`
const StTotal = styled.div`
  height: 20px;
  font-size: 14px;
  color: #484850;
  line-height: 30px;
`
const Stfilter = styled.div`
  display: flex;
  width: 400px;
  height: 20px;
  line-height: 10px;
  padding-bottom: 10px;
  p {
    color: #484850;
    font-size: 14px;
    padding-left: 6%;
  }
`
const StList = styled.div`
  /* width: 100vw; */
  height: 100vh;
  margin: 10px 0;
  
  /* background-color: yellow; */
  display: grid;
  grid-template-columns: repeat(6, 39%);
  grid-template-rows: repeat(5, 30%);
  grid-gap: 10px;
  .item {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    font-size: 1.2rem;
    font-weight: bold;
  }
`



