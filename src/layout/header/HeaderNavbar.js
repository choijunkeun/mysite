import React from "react";
import { Button } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import SettingButton from "../../components/header/SettingButton";
import styled from "styled-components";


const Navbar = styled.div`
    display : flex;
    height : 100%;
    justify-content : space-between;
    align-items : center;
`
const HeaderNavbar = ({ collapsed, toggleCollapsed }) => {
    
    
  return (
    <Navbar>
      <Button type="primary" onClick={toggleCollapsed} size="large">
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <SettingButton />
    </Navbar>
  );
};

export default HeaderNavbar;
