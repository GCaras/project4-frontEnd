import React, { useContext, useMemo } from 'react';
import useForm from '../hooks/useLoginFormHook'
import validate from '../hooks/useEmailValidationRules'
import styled from 'styled-components'
import { UserContext } from '../context/UserContext'
import { login } from "../utilities/login"


const errorStyle = {
    color: 'red',
    fontSize: '10px'
}

const StyledLoginContainer = styled.section`
    background-color: lightskyblue;
    border: 2px solid black;
    padding: 10px;
`

const StyledInputPiece = styled.div`
    margin: 10px;
`

const LoginForm = () => {
    const { usersArr } = useContext(UserContext);
    const { user, setUser } = useContext(UserContext);


    //email validation & error display for form input
    const { values, errors, handleLoginChange, handleLoginSubmit } = useForm(login, validate)

    // function login(email, password) {
    //     email = values.email
    //     password = values.password
    //     const userLog = usersArr.find(user => user.email === email)
    //     console.log(userLog)
    //     if(userLog.password === password) {
    //         console.log("Success!")
    //     } else {
    //         console.log("Incorrect username/password")
    //     }
    // }

    return (
        <div>
            <StyledLoginContainer>
            <form onSubmit={handleLoginSubmit}>
                <h3>Login</h3>
                <div>{JSON.stringify(user, null, 2)}</div>
                <button 
                    onClick={async () => {
                    const user = await login(); 
                    setUser(user)}}>TEST</button>
                <StyledInputPiece>
                    <label>Email Address</label>
                    <div>
                        <input 
                            className="input"
                            type="email"
                            name="email"
                            onChange={handleLoginChange}
                            value={values.email || ''}
                            required
                        />
                        {errors.email && (
                            <p style={errorStyle}>{errors.email}</p>
                        )}
                    </div>
                </StyledInputPiece>
                <StyledInputPiece>
                    <label>Password</label>
                    <div>
                        <input 
                            className="input"
                            type="current-password"
                            name="password"
                            onChange={handleLoginChange}
                            value={values.password || ''}
                            required
                            />
                    </div>
                </StyledInputPiece>
                {/* {user ? (
                    <button 
                        onClick={async () => {
                            
                        //call logout function
                        setUser(null)
                    }}>Logout</button> 
                ) : ( 
                    <button 
                    onClick={async () => {
                    var user = await login()
                    setUser(user)}}>Login</button> )} */}
            </form>
            </StyledLoginContainer>
        </div>
    );
};

export default LoginForm;