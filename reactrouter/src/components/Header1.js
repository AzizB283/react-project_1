import React from "react";
import { Menu } from "antd";
import { useState } from "react";
import { NavLink } from "react-router-dom";


function Header1() {
  const mystyle = {
    textDecoration: "none"
  }
  
 
  return (
    
    <>
   <Menu mode="horizontal" theme="dark" >
        <Menu.Item key="home">
          <NavLink to="/" style={mystyle}>Home</NavLink>
        </Menu.Item>

        <Menu.Item key="blogs">
          <NavLink to="/blogs" style={mystyle}>Blogs</NavLink>
        </Menu.Item>

        <Menu.Item key="about">
          <NavLink to="/about" style={mystyle}>About</NavLink>
        </Menu.Item>

        <Menu.Item key="contact">
          <NavLink to="/contact" style={mystyle}>Contact</NavLink>
        </Menu.Item>

        <Menu.Item key="antdesign">
          <NavLink to="/antdesign" style={mystyle}>Ant Design</NavLink>
        </Menu.Item>

        <Menu.Item key="form">
          <NavLink to="/form" style={mystyle}>Form</NavLink>
        </Menu.Item>
      </Menu>
    </>
  );
}

export default Header1;
