import React, { useState, useEffect, useMemo } from 'react'
import styled from 'styled-components'
import { Route } from 'react-router-dom'
import axios from 'axios'

import { UserContext } from '../context/UserContext'
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

    const [usersArr, setUsersArr] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            const result = await axios.get('http://127.0.0.1:8000/anecdote/v1/users/');
            console.log(result.data)
            setUsersArr(result.data)
        };
        fetchUsers();
        console.log(usersArr)
    }, [])

    const usersArrValue = useMemo(() => ({ usersArr, setUsersArr }), [usersArr, setUsersArr])

    const [user, setUser] = useState(null);

    const userValue = useMemo(() => ({ user, setUser }), [user, setUser]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const result = await axios.get(
    //         'http://127.0.0.1:8000/anecdote/v1/users/')
    //         .then(res => {console.log('Response', res.data)});
    //         setUser(result);
    //         console.log(user)
    //     };
    //     fetchData();
    // }, []);

    return (
        <div>
            <UserContext.Provider value={userValue, usersArrValue}>
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
            </UserContext.Provider>
        </div>
    )
}

export default App;