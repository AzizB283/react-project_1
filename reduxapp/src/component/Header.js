import React from "react";
import { Menu, Button} from "antd";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function Header1() {
    const mystyle = {
        textDecoration: "none"
      }

      const amount = useSelector(state => state.amount)
  return (
    <>
      <Menu mode="horizontal" theme="dark">
        <Menu.Item key="home">
          <NavLink to="/" style={mystyle}>
            Home
          </NavLink>
        </Menu.Item>

        <Menu.Item key="about">
          <NavLink to="/thunk" style={mystyle}>
            Thunk
          </NavLink>
        </Menu.Item>

        <Menu.Item >
            <Button type="primary" ghost>Account Balance : {amount}</Button>
        </Menu.Item>
      </Menu>
    </>
  );
}

export default Header1;
