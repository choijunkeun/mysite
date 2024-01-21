import React from 'react'
import { SettingOutlined, HeartOutlined, HeartFilled } from "@ant-design/icons";
import { Avatar, Card } from 'antd'
import styled from 'styled-components';

const { Meta } = Card;

const PostCardWrap = styled.div`
    margin : 40px 20px;
    width: 320px;
`;

const PostCard = ({post, index}) => {
    return (
        <PostCardWrap>
            <Card hoverable 
                actions={ [<HeartOutlined key="like" />, <HeartFilled key="setting" />] }
                cover={ <img alt="" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"/> }
            >
                <Meta style={ {height: 100, overflow: "hidden" }} avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
                    title={post.title}
                    description={post.content} />
            </Card>
        </PostCardWrap>
    )
}

export default PostCard