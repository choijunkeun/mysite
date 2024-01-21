// Ant-Design 라이브러리에서 제공하는 Sider > Menu 컴포넌트에 items={ data } 에 넣어줄 data
// data -> 각 메뉴 키, 아이콘, 이름, 경로 세팅
import React from 'react';
import {
  HomeOutlined,
  UserOutlined,
  InstagramOutlined,
  CommentOutlined,
  VideoCameraOutlined,
  TableOutlined,
} from "@ant-design/icons";

const setItem = (label, key, icon, children, type) => {
  return {
    key, icon, children, label, type
  }
};

export const menuItem = [
  setItem('Home', '/', <HomeOutlined />),
  setItem('About', 'about', <UserOutlined />),
  setItem('Insta', 'insta', <InstagramOutlined />, [
    setItem('Post', 'post', <TableOutlined />),
    setItem('Reels', 'reels', <VideoCameraOutlined />)
  ]),
  setItem('Q&A', 'qna', <CommentOutlined />),
  
];