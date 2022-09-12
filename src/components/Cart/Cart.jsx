import React from 'react';
import styled from 'styled-components';

const Cart = () => {
  const item = {
    data: [
      {id:"", imgUrl:"", title:"", desc:"", cost:""},
      {id:"1", imgUrl:"이미지", title:"[인더비기닝]", desc:"fogni round pouch", cost:"18,000원"}
    ]
  }

  return (
      <Container>
        <Item1>
          <div>BAG</div>
        </Item1>
        <Item2>
        <table class="table table-borderless">
          <thead style={{textAlign:"center"}}>
            <tr>
              <th scope="col" ><input type="checkbox" id="checkall" /></th>
              <th scope="col" style={{width:"80px"}}>이미지</th>
              <th scope="col" style={{width:"300px"}}>상품정보</th>
              <th scope="col" style={{width:"100px"}}>수량</th>
              <th scope="col" style={{width:"100px"}}>판매가</th>
              <th scope="col" style={{width:"100px"}}>배송비</th>
              <th scope="col" style={{width:"100px"}}>합계</th>
              <th scope="col" style={{width:"100px"}}>선택</th>
            </tr>
          </thead>
          <tbody>
            {item.data.map((item)=>{
              return (
                <tr style={{textAlign:"center"}}>
                  <th scope="row"><input type="checkbox" id={item.id} /></th>
                  <td style={{width:"80px", height:"80px"}}>{item.imgUrl}</td>
                  <td style={{width:"300px", height:"80px"}}>{item.title}{item.desc}</td>
                  <td style={{width:"100px", height:"80px"}}>수량</td>
                  <td style={{width:"100px", height:"80px"}}>{item.cost}</td>
                  <td style={{width:"100px", height:"80px"}}>무료</td>
                  <td style={{width:"100px", height:"80px"}}>{item.cost}*수량</td>
                  <td style={{width:"100px", height:"80px"}}>
                  <button style={{backgroundColor:"black", color:"white", border:"1.5px solid black"}}>주문하기</button>
                  <br />
                  <button style={{backgroundColor:"white", color:"gray", border:"1.5px solid gray"}}>삭제</button>
                  </td>
                </tr>
              );
            })}
            
          </tbody>
        </table>
        </Item2>
      </Container>
  );
};

export default Cart;

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
  padding-left: 10px; ;
  font-family: 'Gill Sans', 'Gill Sans MT', 'Lato', 'Noto Sans KR', Helvetica, Arial, sans-serif;
  div {
    font-size: 31px;
    padding-bottom: 15px;
    letter-spacing: 3px;
  }
`;

const Item2 = styled.div`
  font-family: 'Gill Sans', 'Gill Sans MT', 'Lato', 'Noto Sans KR', Helvetica, Arial, sans-serif;
  /* background-color: whitesmoke; */
  grid-column: 2 / -1;
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1140px;
  margin: 0 40px 0 0;
  font-size: 14px;
  
  table {
    width: 100%;
  }
  thead {
    
    th {
    width: 5px;
    border-bottom: 1px solid #D4D4D4;
    }
  }
  
  tbody {
    button{
      width: 100px;
      height: 34px; 
      margin: 2px 0;
      line-height: 34px;
      font-size: 16px;
    }
  }
`;

