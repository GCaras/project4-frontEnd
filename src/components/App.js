import React, { useState, useEffect, useMemo } from 'react'
import styled from 'styled-components'
import { Route } from 'react-router-dom'

import Navbar from '../components/Navbar'
import SplashPage from '../components/Splashpage'
import LoginForm from './LoginForm'
import RegistrationForm from './RegistrationForm'
import BlogPostList from './BlogPostList'
import BlogPostDetail from './BlogPostDetail'
import UserContext from '../context/UserContext'

const StyledAppContainer =styled.main`
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: 20px 0;
    text-align: center;
`

const App = () => {

    const [user, setUser] = useState(null);

    const userValue = useMemo(() => ({ user, setUser }), [user, setUser]);

    const [blogList, setBlogList] = useState([])

    function fetchBlogData() {
        fetch("http://127.0.0.1:8000/blogposts/")
        .then(res => res.json())
        .then(response => setBlogList(response))
        .catch(err => console.log(err))
    }

    useEffect(() => {
        fetchBlogData();
    }, [])

    return (
        <div>
            <UserContext.Provider value={userValue}>
                <Navbar />
                <StyledAppContainer>
                    <Route
                        path='/'
                        exact
                        render={props => <SplashPage {...props}/>}
                    />
                    <Route
                        path='/login'
                        exact
                        render={props => <LoginForm {...props}/>}
                    />
                    <Route
                        path='/register'
                        exact
                        render={props => <RegistrationForm {...props}/>}
                    />
                    <Route
                        path='/bloglist'
                        exact
                        render={props => <BlogPostList blogList={blogList} {...props}/>}
                    />
                    <Route
                        path='/bloglist/:id'
                        exact
                        render={props => <BlogPostDetail blogList={blogList} {...props}/>}
                    />
                </StyledAppContainer>
            </UserContext.Provider>
        </div>
    )
}

export default App;