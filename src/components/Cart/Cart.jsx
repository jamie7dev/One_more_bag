import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Cart = () => {
    return (
      <>
        <Container>
          <Item1>
            <div>BAG</div>
          </Item1>
          <div className="Cart-container">

          </div>
        </Container>
      </>
    );
}

export default Cart;

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
  div{
    font-family: 'Gill Sans', 'Gill Sans MT', 'Lato', 'Noto Sans KR', Helvetica,
      Arial, sans-serif;
  }
  div {
    font-size: 31px;
    padding-bottom: 15px;
    letter-spacing: 2.5px;
  }
`;

