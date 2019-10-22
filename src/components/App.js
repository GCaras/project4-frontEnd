import React from 'react'
import { Route } from 'react-router-dom'

import Navbar from '../components/Navbar'
import SplashPage from '../components/Splashpage'
import LoginForm from './LoginForm'
import RegistrationForm from './RegistrationForm'

const App = () => {
    return (
            <div className="App">
                <Navbar />
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
            </div>
    )
}

export default App;