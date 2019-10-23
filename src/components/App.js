import React from 'react'
import styled from 'styled-components'
import { Route } from 'react-router-dom'
import { UserProvider } from '../context/UserContext'

import Navbar from '../components/Navbar'
import SplashPage from '../components/Splashpage'
import LoginForm from './LoginForm'
import RegistrationForm from './RegistrationForm'

const StyledAppContainer =styled.main`
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: 20px 0;
    text-align: center;
`

const App = () => {
    const user = { username: 'gcaras', loggedIn: true }

    return (
        <div>
            <UserProvider value={user}>
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
                </StyledAppContainer>
            </UserProvider>
        </div>
    )
}

export default App;