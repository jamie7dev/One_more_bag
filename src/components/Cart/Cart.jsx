import React from 'react';
import styled from 'styled-components';

const Cart = () => {
  return (
      <Container>
        <Item1>
          <div>BAG</div>
        </Item1>
        <Item2>

        </Item2>
      </Container>
  );
};

export default Cart;

const Container = styled.div`
  background-color: aqua;
  display: grid;
  margin: 0 auto;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: minmax(auto);
  grid-column-gap: 10px;
  width: 1480px;
  padding: 50px 20px 100px 20px;
`;

const Item1 = styled.div`
  background-color: yellow;
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
`;
