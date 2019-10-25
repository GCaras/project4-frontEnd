import React, { useState, useMemo } from 'react'
import styled from 'styled-components'
import { Route } from 'react-router-dom'

import Navbar from '../components/Navbar'
import SplashPage from '../components/Splashpage'
import LoginForm from './LoginForm'
import RegistrationForm from './RegistrationForm'
import BlogPostList from './BlogPostList'
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

    return (
        <div>
            <UserContext.Provider value={userValue}>
                <Navbar />
                <StyledAppContainer>
                    <Route
                        path='/'
                        exact
                        render={SplashPage}
                    />
                    <Route
                        path='/login'
                        exact
                        component={LoginForm}
                    />
                    <Route
                        path='/register'
                        exact
                        component={RegistrationForm}
                    />
                    <Route
                        path='/bloglist'
                        exact
                        component={BlogPostList}
                    />
                </StyledAppContainer>
            </UserContext.Provider>
        </div>
    )
}

export default App;