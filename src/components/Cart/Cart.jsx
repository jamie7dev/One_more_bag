import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { __getCart, __deleteCartItem, changeCount, __deleteAll } from '../../redux/modules/cart';
// import { instance } from '../../shared/api';

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state)=>state.cart);
  const IdListofMyCartItems = cart?.cart?.map((item)=> {return item?.id});
  // console.log(IdListofMyCartItems);
  // let [arr, setArr] = useState(new Array(cart?.cart?.length).fill(1));
  

  useEffect(()=>{
    setIdList(cart?.cart?.map((item => {return item?.id})))
    dispatch(__getCart());
  },[dispatch, cart?.cart?.length]);
  // console.log(cart.cart);

  const removeItem = (id) => {
    dispatch(__deleteCartItem({data:{postId:[id]}}));
  };

  const removeAllItem = () => {
    dispatch(__deleteAll({data:{postId:[...IdListofMyCartItems]}}));
  };

  const removeChecked = (id) => {
    dispatch(__deleteCartItem({data:{postId:id}}));
    
  };



  //checkbox
  const [CheckList, setCheckList] = useState([])
  const [IdList, setIdList] = useState([])

  useEffect(() => {
    setIdList(cart?.cart?.map((item => {return item?.id})))
  }, []);
  
  const [check, setCheck] = useState(0);
  const [arr, setArr] = useState([]);
 

  // 체크박스 전체 선택
  const onChangeAll = (e) => {
    // 체크할 시 CheckList에 id 값 전체 넣기, 체크 해제할 시 CheckList에 빈 배열 넣기
    setCheckList(e.target.checked ? IdList : [])
  }

  const onChangeEach = (e, id) => {
    // 체크할 시 CheckList에 id값 넣기
    if (e.target.checked) {
      setCheckList([...CheckList, id]);
    // 체크 해제할 시 CheckList에서 해당 id값이 `아닌` 값만 배열에 넣기
    } else {
      setCheckList(CheckList.filter((checkedId) => checkedId !== id));
    }
  }

  const countChecked = (e) => {
    // console.log(e.target.value)
    if(e.target.checked){
          // 선택한 체크박스를 배열형식으로 저장
          setArr([...arr,e.target.value])
      
    // 체크를 눌렀다가 해제했을 때 동작하는 내용
    }else{
        // 배열형식으로 저장된 내용을 수정하는 부분 (체크 해제된 내용을 찾아서 배열에서 제거)
        let index= arr.findIndex((a) => a === e.target.value)
        let copy = arr;
        // console.log(copy.splice(index,1))
    }
    // console.log(arr)

  }

  
  

  return (
      <Container>
        <Item1>
          <div>BAG</div>
        </Item1>
        <Item2>
        <table className="table table-borderless">
          <thead style={{textAlign:"center"}}>
            <tr>
              <th scope="col" ><input type="checkbox" id="checkall" 
              onChange={onChangeAll} checked={CheckList.length === IdList.length}/></th>
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
                    <input type="checkbox"
                    value={item.id}             
                    onClick={countChecked}
                    onChange={(e) => onChangeEach(e, item.id)} checked={CheckList.includes(item.id)}/>
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
                    <input 
                      type="number"
                      min="0"
                      value={item.cnt} 
                      onChange={(e)=>{dispatch(changeCount({id:item.id, count:e.target.value}))}} 
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
                    {(Number(item.cost)*Number(item.cnt)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원
                  </td>
                  
                  {/* 선택 */}
                  <td >
                    <button 
                    style={{backgroundColor:"black", color:"white", border:"1.5px solid black"}}
                    onClick={()=>alert('아직 구현되지 않은 기능입니다😭')}>
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
          <button onClick={()=>{removeChecked(arr)}}>삭제하기</button>
        </Rmv1>
        <Rmv2>
          <button onClick={removeAllItem}>장바구니 비우기</button>
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