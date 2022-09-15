import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { _getPosts, __sortAndCategory } from '../../redux/modules/list';
import Pagination from './Pagination';

const List = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const contents = useSelector((state) => state.list);
  // console.log(contents?.data);
  const [limit, setLimit] = useState(30); // 페이지당 게시물
  const [page, setPage] = useState(1); // 현재 페이지 번호
  const offset = ( page -1 ) * limit; // 첫 게시물 위치

  const [cateNo, setCateNo] = useState(0);
  const [sortNo, setSortNo] = useState(0);

  useEffect(()=> {
    // dispatch(_getPosts(page));
    dispatch(__sortAndCategory({page:page, sortNo:sortNo, cateNo:cateNo}));
  }, [page, sortNo, cateNo]);

  const onClickSortAndCategory = (cateNo, sortNo) => {
    dispatch(__sortAndCategory({page:page, sortNo:sortNo, cateNo:cateNo}));
  };

  return (
    <>
    <Stbody>
      <StCategory>
        <p>ALL</p>
        <p>💫BEST</p>
        <p>💝SPECIAL</p>
        <p>🎁GIFT</p>
        <p onClick={()=>{setCateNo(0); onClickSortAndCategory(cateNo, sortNo)}}>BAG</p>
        <p onClick={()=>{setCateNo(1); onClickSortAndCategory(cateNo, sortNo)}}>ACC</p>
        <p onClick={()=>{setCateNo(2); onClickSortAndCategory(cateNo, sortNo)}}>STATIONERY</p>
        <p onClick={()=>{setCateNo(3); onClickSortAndCategory(cateNo, sortNo)}}>DIGITAL</p>
        <p onClick={()=>{setCateNo(4); onClickSortAndCategory(cateNo, sortNo)}}>DOLL</p>
        <p onClick={()=>{setCateNo(5); onClickSortAndCategory(cateNo, sortNo)}}>HOME</p>
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
            <p className="total" onClick={()=>{setSortNo(0); onClickSortAndCategory(cateNo, sortNo)}}>신상품</p>
            <p className="total" onClick={()=>{setSortNo(4); onClickSortAndCategory(cateNo, sortNo)}}>상품명</p>
            <p className="total" onClick={()=>{setSortNo(2); onClickSortAndCategory(cateNo, sortNo)}}>낮은가격</p>
            <p className="total" onClick={()=>{setSortNo(3); onClickSortAndCategory(cateNo, sortNo)}}>높은가격</p>
            <p className="total" onClick={()=>{setSortNo(1); onClickSortAndCategory(cateNo, sortNo)}}>조회수</p>
          </Stfilter>
          </StFunction>        
        <StList>
        <StList>
        {contents?.data?.content?.map((item) => {
           return <div
              key={item?.id}
              style={{ display:"grid" }}
              onClick={()=>{navigate(`/detail/${item.id}`)}}            
            >
            <img 
            alt='' src={item?.imgUrl} style={{width:'100%',height:'100%', maxWidth:'177px', minWidth:'160px', maxHeight:'177px', minHeight:'159px'}}/>
            <StBrand>{item?.brand}</StBrand>
            <div style={{fontSize:'13px', color:'#555555'}}>{item?.title}</div>
            <div style={{fontSize:'15px'}}>{item?.cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</div>
            </div>
          })}
        </StList>
        </StList>       
        </StContainer>
      </StWrap>
    </Stbody>
    <footer style={{position:"fixed", bottom:"10px", zIndex:"1", left:"30%"}}>
        <Pagination
          total={762}
          limit={limit}
          page={page}
          setPage={setPage}
        />
      </footer>
    </>
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

// const ItemList = ({contents, navigate}) => {
//     // console.log(contents?.content);
//   // const itemList = new Array(30).fill("");

//   return (
//     <>
//     <StList>
//       {contents?.content?.slice(offset, offset+limit).map((item) => (
//           <div
//             key={item?.id}
//             style={{ display:"grid" }}
//             onClick={()=>{navigate(`/detail/${item.id}`)}}            
//           >
//           <img 
//           alt='' src={item?.imgUrl} style={{width:'100%',height:'100%', maxWidth:'177px', minWidth:'160px', maxHeight:'177px', minHeight:'159px',}}/>
//           <StBrand>{item?.brand}</StBrand>
//           <div style={{fontSize:'13px', color:'#555555'}}>{item?.title}</div>
//           <div style={{fontSize:'15px'}}>{item?.cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</div>
//           </div>
//         ))}
//     </StList>
    
//     </>
//   )
// }



export default List;


//styled components
const Stbody = styled.div`
  max-width: 1380px;
  min-width: 1140px;
  margin: 40px auto;
  padding-left: 3%;
`

const StCategory = styled.div`
  display: flex;
  max-width: 1880px;
  min-width: 1140px;
  margin: 60px 0;
  justify-content: flex-start;
  flex-wrap: wrap;
  p {
    font-size: 26px;
    padding: 1% 2.4%;
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
  width: 30%;
  min-width: 180px;
  max-width: 240px;
`
const StContainer = styled.div`
  width: 100%;
  padding-left: 1.8%;
  position: relative;
`
const StFunction = styled.div`
  display: flex;
  /* justify-content: space-between; */
  
`
const StTotal = styled.div`
  height: 20px;
  font-size: 14px;
  color: #484850;
  line-height: 10px;
`
const Stfilter = styled.div`
  /* background-color: green; */
  display: flex;
  position: absolute;
  right: 0;
  width: 340px;
  height: 20px;
  line-height: 10px;
  padding-bottom: 10px;

  p {
    color: #484850;
    font-size: 14px;
    padding-left: 6%;
    cursor: pointer;
  }
`
const StList = styled.div`
  /* width: 100vw; */
  /* height: 100vh; */
  margin: 10px 0;
  
  display: grid;
  grid-template-columns: repeat(6, 40%);
  /* grid-template-rows: repeat(5, 30%); */
  grid-auto-rows: minmax(auto);
  grid-gap: 7px;
  z-index: 1;
  .item {
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 1px solid black; */
    font-size: 1.2rem;
    font-weight: bold;
  }
`
const StBrand = styled.div`
  /* background-color: wheat; */
  font-weight: bold;
  font-size: 15px;
  font-family: 'Helvetica Neue';
  padding: 3px 0 0 0;
`