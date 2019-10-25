import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'

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
                <div key={i}>
                    <Link to={'/blog/' + blog.id +'/'}>
                        <h3 >{blog.title}</h3>
                        <p>{blog.body}</p>
                    </Link>
                </div>
                ))}
            </section>
        </div>
    )
}

export default BlogPostList