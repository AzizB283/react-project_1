import React from "react";
import { NavLink } from "react-router-dom";
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Space } from 'antd';

function Header2() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            Navbar
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/blogs">
                  Blogs
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/antdesign">
                  Ant Design
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/form">
                  Formik Form
                </NavLink>
              </li>

            </ul>
            <span className="navbar-text">
              <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
            </span>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header2;
