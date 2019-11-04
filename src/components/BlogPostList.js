import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'

const StyledBlogItem = styled.article`
    background-color: lightskyblue;
    border: 2px solid black;
    margin: 10px;
    width: 50vw;
`

const BlogPostList = () => {
    
    const [blogList, setBlogList] = useState([])

    useEffect(() => {
        const fetchBlogList = async () => {
            const result = await axios.get('http://127.0.0.1:8000/blogposts/');
            console.log(result.data)
            setBlogList(result.data)
        };
        fetchBlogList();
    }, [])

    return(
        <div>
            <h2>Blog Posts</h2>
            <section>
                {blogList.map((blog, i) => (
                <StyledBlogItem key={i}>
                    <Link to={'/blog/' + blog.id +'/'}>
                        <h3 >{blog.title}</h3>
                        <p>{blog.body}</p>
                    </Link>
                </StyledBlogItem>
                ))}
            </section>
        </div>
    )
}

export default BlogPostList