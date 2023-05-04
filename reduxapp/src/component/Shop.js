import React from "react";
import { Button, Space } from "antd";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import {actionCreators} from "../state/index";

function Shop() {
    const dispatch = useDispatch()
    const {depositMoney, withdrawMoney} = bindActionCreators(actionCreators, dispatch)
  return (
    <>
      <Space
        direction="vertical"
        size="middle"
        style={{
          display: "flex",
        }}
      >
        <h2>Deposit/Withdraw</h2>
        <Space>
          <Button type="primary" onClick={() => {withdrawMoney(100)}}>-</Button>
          Update Balance
          <Button type="primary" onClick={() => {depositMoney(100)}}>+</Button>
        </Space>
      </Space>
    </>
  );
}

export default Shop;
