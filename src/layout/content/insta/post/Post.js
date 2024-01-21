import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import PostCard from '../../../../components/content/insta/post/PostCard';
import { Flex, Col, Row } from 'antd';
import { useQuery } from 'react-query';
import axios from 'axios';





const PostWrap = styled.div`
    height : 100%;
    margin : 20px;
    padding : 20px;
`;

const Post = () => {
    // 임시데이터
    const tempPostData = [
        { id: 1, title : "제목1", content : "내용이 엄청 길어진다면???내용이 엄청 길어진다면???내용이 엄청 길어진다면???내용이 123123123132asdfasdfasdfasfs", like: 1, },
        { id: 2, title : "제목2", content : "내용2", like: 2, },
        { id: 3, title : "제목3", content : "내용3", like: 3, },
        { id: 4, title : "제목4", content : "내용4", like: 4, },
        { id: 5, title : "제목5", content : "내용5", like: 5, },
        { id: 6, title : "제목6", content : "내용6", like: 6, },
        { id: 7, title : "제목7", content : "내용7", like: 7, },
        { id: 7, title : "제목7", content : "내용7", like: 7, },
        { id: 7, title : "제목7", content : "내용7", like: 7, },
        { id: 7, title : "제목7", content : "내용7", like: 7, },
        { id: 7, title : "제목7", content : "내용7", like: 7, },
        { id: 7, title : "제목7", content : "내용7", like: 7, },
    ];

    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const loader = useRef(null);

    // const fetchPosts = useQuery("getPosts", () => {
    //   return axios.get("").then((a) => {
    //     console.log(a.data);
    //       return a.data

          
    //     })
    // });

    useEffect(()=> {
    }, [page]);


    



  return (
    <PostWrap>
        <Row >
            
            {
                tempPostData.map((post, index) => {
                    return ( 
                        <Col xs={24} lg={12} xl={8} style={{ display: "flex", justifyContent: "space-around" }}>
                            <PostCard post={post} index={index} />
                        </Col>
                             )
                })
            }
        </Row>
        <div>
            {/* { fetchPosts.error && "에러인가????"} */}
            {/* { fetchPosts.isLoading && "로딩중!!!"} */}
            {/* { fetchPosts.data && "실제데이터 나옴"} */}
        </div>
    </PostWrap>
  )
}

export default Post