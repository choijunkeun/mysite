import './App.css';
// react
import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
// antd
import { Layout, Menu, Button, Avatar} from 'antd';
// data
import { menuItem } from './components/sidebar/menuItem';
import profile from './assets/profile.jpg';
// component
import HeaderNavbar from './layout/header/HeaderNavbar';
import About from './layout/content/about/About';
import Post from './layout/content/insta/post/Post';
import Qna from './layout/content/qna/Qna';
import Reels from './layout/content/insta/reels/Reels';

const { Header, Content, Footer, Sider } = Layout;

const App = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  }

  const onSelectMenu = (info) => {
    const targetUrl = info.keyPath.length === 2 ? `${info.keyPath[1]}/${info.keyPath[0]}` : info.keyPath[0];
    navigate(targetUrl);
  }

  return (
    <Layout hasSider>
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "sticky",
          left: 0,
          top: 0,
          bottom: 0,
        }}
        collapsed={collapsed}
        
      >
        <div className="logo-wrap">
          <Avatar size={ collapsed ? 40 : 80 } icon={ <img src={profile} alt=""></img>}/>
        </div>
        <Menu
          onSelect={onSelectMenu}
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["/"]}
          // inlineCollapsed={collapsed}
          items={menuItem}
        >
        </Menu>
      </Sider>
      <Layout style={{height: "100vh"}}>
        <Header>
          <HeaderNavbar collapsed={collapsed} toggleCollapsed={toggleCollapsed} />
        </Header>
        <Content style={{overflow: "scroll"}}>
          <Routes>
            <Route path="/about" element={ <About /> }/>
            <Route path="/insta/post" element={ <Post /> }/>
            <Route path="/insta/reels" element={ <Reels /> }/>
            <Route path="/qna" element={ <Qna /> }/>
          </Routes>
        </Content>
        {/* <Footer></Footer> */}
      </Layout>
    </Layout>
  );
}

export default App;
