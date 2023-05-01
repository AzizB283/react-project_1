import React from "react";
import { Menu } from "antd";
import { useState } from "react";

const items = [
  {
    label: "Home",
    key: "mail",
  },
  {
    label: "Blogs",
    key: "app",
  },

  {
    label: "Contact",
    key: "contact",
  },

  {
    label: "About",
    key: "about",
  },

];

function Header1() {
  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
    </>
  );
}

export default Header1;
