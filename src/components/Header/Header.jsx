import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { NodeMinus, Search } from 'react-bootstrap-icons';

const Header = () => {
  return (
    <>
      <StHeader>
        <StHdCategory>
            <StLogo>onemorebag</StLogo>
            <StHdBtn>SHOP</StHdBtn>
            <StHdBtn>PLOT</StHdBtn>
            <StHdBtn>ABOUT</StHdBtn>
            <Label>
              <label>
                <input type="text" placeholder="Search" style={{border: "none"}} />
                <button style={{border: "none", background: "none", cursor: "pointer"}}><Search /></button>
              </label>
            </Label>
            <StUserBtn>
              <p>LOGIN</p>
              <p>JOIN</p>
              <p>BAG/0</p>
            </StUserBtn>
            <EngBtn>EN</EngBtn>

        </StHdCategory>        
      </StHeader>
    </>
  );
};

export default Header;

const StHeader = styled.div`
  text-align: center;
  position: relative;
  max-width: 1480px;
  min-width: 1180px;
  padding: 0 20px;
  margin: 0 auto;
  width: 100%;
  top: 18px;
`
const StHdCategory = styled.div`
  /* position: absolute; */
  display: flex;
  /* align-items: center; */
  width: 100%;
  justify-content: space-between;
  font-family: "GillSansMTPro-Book";
  a, button {
      text-decoration: none;
      color: black;
      margin: 10px;
      font-size: 20px;
    }
`
const EngBtn = styled.p`
  border: 1.5px solid black;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  font-size: 17px;
  font-weight: bold;
  text-align: center;
  line-height: 40px;
  cursor: pointer;
`

const StLogo = styled.p`
  padding: 5px 15px;
  font-size: 28px;
  line-height: 38px;
  letter-spacing: 2.5px;
  cursor: pointer;
`
const StHdBtn = styled.p`
  padding: 5px 15px;
  font-size: 28px;
  line-height: 38px;
  letter-spacing: 2.5px;
  cursor: pointer;
`
const Label = styled.div`
  height: 44px;
  border-bottom: 1.5px solid black;
  margin-top: 16px;
`

const StUserBtn = styled.div`
  display: flex;
  font-size: 14px;
  margin-left: 3%;
  margin-top: 16px;
  cursor: pointer;
  p {
    padding: 0 12%;
  }
`