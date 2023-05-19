import React from "react";
import { Layout, Space } from "antd";
// import styles from "./maincomp.module.css";
import Header1 from "../header/Header1";
import Side from "../side/Side";
import Content1 from "../content/Content1";
import Footer1 from "../footer/Footer1";
import "./maincomp.css";

const { Header, Footer, Sider, Content } = Layout;

function MainComp() {
  return (
    <>
      <Layout>
        <Header className={"headerStyle"}>
          <Header1 />
        </Header>
        <div className="container">
          <Layout>
            <Sider
              breakpoint={"lg"}
              theme="light"
              collapsedWidth={0}
              expandBehaviour="overTheTop"
              className="siderStyle"
            >
              <Side />
            </Sider>
            <Content className={"contentStyle"}>
              <Content1 />
            </Content>
          </Layout>
        </div>
        <Footer className={"footerStyle"}>
          <Footer1 />
        </Footer>
      </Layout>
    </>
  );
}

export default MainComp;
