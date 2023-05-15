import React from "react";
import { Layout, Space } from "antd";
import styles from "./maincomp.module.css";
import Header1 from "../header/Header1";
import Side from "../side/Side";
import Content1 from "../content/Content1";
import Footer1 from "../footer/Footer1";

const { Header, Footer, Sider, Content } = Layout;

function MainComp() {
  return (
    <>
      <Layout>
        <Header className={styles.headerStyle}>
          <Header1 />
        </Header>
        <Layout>
          <Sider
            className={styles.siderStyle}
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => {
              console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
              console.log(collapsed, type);
            }}
          >
            <Side />
          </Sider>
          <Content className={styles.contentStyle}>
            <Content1 />
          </Content>
        </Layout>
        <Footer className={styles.footerStyle}>
          <Footer1 />
        </Footer>
      </Layout>
    </>
  );
}

export default MainComp;
