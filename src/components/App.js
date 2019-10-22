import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from '../components/Navbar'
import SplashPage from '../components/Splashpage'
import Register from './Register'
import Login from '../components/Login'

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Route
                exact
                path="/"
                component={SplashPage} 
                />
                <Route
                exact
                path="/register"
                component={Register}
                />
                <Route
                exact
                path="/login"
                component={Login}
                />
            </div>
        </Router>
    );
}

export default App;