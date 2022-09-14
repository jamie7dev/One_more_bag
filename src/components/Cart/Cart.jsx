import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { __getCart } from '../../redux/modules/cart';
import { instance } from '../../shared/api';

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state)=>state.cart)
  // const [count, setCount] = useState(0); 

  useEffect(()=>{
    dispatch(__getCart());
  },[dispatch])

  let [arr, setArr] = useState(new Array(cart?.cart?.length).fill(1));
  
  const removeItem = async(id) => {
    try {
      let response = await instance.delete('api/member/cart', {data:{postId:[id]}});
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  

  return (
      <Container>
        <Item1>
          <div>BAG</div>
        </Item1>
        <Item2>
        <table className="table table-borderless">
          <thead style={{textAlign:"center"}}>
            <tr>
              <th scope="col" ><input type="checkbox" id="checkall" /></th>
              <th scope="col" style={{width:"80px", fontWeight:"normal"}}>이미지</th>
              <th scope="col" style={{width:"300px", fontWeight:"normal"}}>상품정보</th>
              <th scope="col" style={{width:"100px", fontWeight:"normal"}}>수량</th>
              <th scope="col" style={{width:"100px", fontWeight:"normal"}}>판매가</th>
              <th scope="col" style={{width:"100px", fontWeight:"normal"}}>배송비</th>
              <th scope="col" style={{width:"100px", fontWeight:"normal"}}>합계</th>
              <th scope="col" style={{width:"100px", fontWeight:"normal"}}>선택</th>
            </tr>
          </thead>
          <tbody>
            {cart?.cart?.map((item, i)=>{
              return (
                <tr style={{textAlign:"center"}} key={item.id}>
                  {/* 체크박스 */}
                  <th scope="row">
                    <input type="checkbox" id={item.id} />
                  </th>
                  
                  {/* 이미지 */}
                  <td>
                    <img alt='' src={item.imgUrl} style={{width:"80px", height:"80px"}}/>
                  </td>
                  
                  {/* 상품정보 */}
                  <td style={{width:"300px", height:"80px"}}>
                    {item.title}{item.desc}
                  </td>
                  
                  {/* 수량 */}
                  <td>
                    <input type="number" value={arr[i]} min="0" 
                      onChange={(e)=>{
                      let copy = [...arr]; 
                      copy[i]=e.target.value; 
                      setArr(copy)}} 
                      style={{width:"44px", height:"26px"}}/>
                  </td>
                  
                  {/* 판매가 */}
                  <td >
                    {item.cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원
                  </td>
                  
                  {/* 배송비 */}
                  <td >무료</td>
                  
                  {/* 합계 */}
                  <td >
                    {(Number(item.cost)*Number(arr[i])).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원
                  </td>
                  
                  {/* 선택 */}
                  <td >
                    <button 
                    style={{backgroundColor:"black", color:"white", border:"1.5px solid black"}}>
                      주문하기
                    </button>
                    <br />
                    <button 
                    style={{backgroundColor:"white", color:"gray", border:"1.5px solid gray"}} 
                    onClick={()=>{removeItem(item.id)}}>
                      삭제
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        </Item2>
        <Rmv1>
          <button>삭제하기</button>
        </Rmv1>
        <Rmv2>
          <button>장바구니 비우기</button>
        </Rmv2>
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
    td {
      width: 100px, 
      /* height: 80px, */
    }
  }
`;

const Rmv1 = styled.div`
  grid-column: 2 / 3;
  grid-row: 3 / 4;
  button{
    width: 150px;
    min-height: 50px;
    height: 50px;
    background: transparent;
    border: 1.5px solid #000;
    line-height: 50px;
  }
`

const Rmv2 = styled.div`
  grid-column: 5 / 6;
  grid-row: 3 / 4;
  position: relative;
  button {  
    width: 150px;
    min-height: 50px;
    height: 50px;
    background: transparent;
    border: 1.5px solid #000;
    position: absolute;
    right: 60px;
    line-height: 50px;
  }
`