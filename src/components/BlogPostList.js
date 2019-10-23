import React, { useState, useEffect } from 'react';
import Axios from 'axios';



const BlogPostList = () => {

    
    const [blogList, setBlogList] = useState()

    function fetchBlogList() {
        Axios.get(
            'http://127.0.0.1:8000/anecdote/v1/users/',
            );
            setBlogList(result.data)
    };

    fetchBlogList();
    console.log(blogList);


    return(
        <div>
            <h2>Blog Posts</h2>
            <section>
                {/* loop through each decade index */}
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