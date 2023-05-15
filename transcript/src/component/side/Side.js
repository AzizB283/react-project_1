import React from "react";
import {
  MenuFoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { NavLink } from "react-router-dom";
import Content from "../content/Content1";

function Side() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <>
      <Menu
        theme="dark"
        items={[
          { label: "Timeline", disabled: true },
          { label: "00:00" },
          { label: "05:00" },
          { label: "10:00" },
          { label: "15:00" },
          { label: "20:00" },
          { label: "25:00" },
          { label: "30:00" },
        ]}
      ></Menu>
    </>
  );
}

export default Side;
