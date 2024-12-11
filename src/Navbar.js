import React from "react";
import styled from "styled-components";

const Nav = styled.div`
  background: linear-gradient(170deg, #1bc059, #0d47a1);
  display: flex;
  align-items: center;
  position: relative;
  height: 70px;
  justify-content: space-between;
`;

const Title = styled.div`
  font-size: 40px;
  color: #161648;
  font-weight: 700;
  font-family: "Times New Roman", Times, serif;
  text-decoration: underline;
  margin-left: 20px;
`;

const CartContainer = styled.div`
  position: relative;
  cursor: pointer;
`;
const CartIcon = styled.img`
  height: 50px;
  margin-right: 20px;
`;
const CartCount = styled.span`
  background: rgb(12, 91, 12);
  color: rgb(189, 81, 229);
  padding: 4px 8px;
  position: absolute;
  right: 10px;
  top: -4px;
  font-weight: 700;
  border-radius: 50%;
  font-size: 16px;
`;

class Navbar extends React.Component {
  render() {
    const { cartCount } = this.props;
    return (
      <>
        <Nav>
          <Title>MovieHaven</Title>
          <CartContainer>
            <CartIcon
              src="https://cdn-icons-png.flaticon.com/128/4906/4906355.png"
              alt="cart"
            />
            <CartCount>{cartCount}</CartCount>
          </CartContainer>
        </Nav>
      </>
    );
  }
}

export default Navbar;
