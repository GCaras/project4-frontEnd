import React from 'react';

import styled from 'styled-components'

const StyledBlogItem = styled.article`
    background-color: lightskyblue;
    border: 2px solid black;
    margin: 10px;
    width: 50vw;
`

const BlogPostDetail = (props) => {
    const blogId = props.match.params.id;

    const blogPost = props.blogList.find(blog => blog.id == blogId)

    console.log(blogId)

    // console.log(props.blogList)    

    console.log(blogPost)

    return(
        <div>
            <StyledBlogItem>
                <h3 >{blogPost.title}</h3>
                <p>{blogPost.body}</p>
            </StyledBlogItem>
        </div>
    )
}

export default BlogPostDetail