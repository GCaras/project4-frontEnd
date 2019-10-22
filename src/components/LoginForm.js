import React from 'react';
import useForm from '../hooks/useLoginFormHook'
import validate from '../hooks/useEmailValidationRules'
import styled from 'styled-components'

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
    const { values, errors, handleLoginChange, handleLoginSubmit } = useForm(login, validate)

    function login() {
        console.log(values)
    }

    return (
        <div>
            <StyledLoginContainer>
            <form onSubmit={handleLoginSubmit}>
                <h3>Login</h3>
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
                <button type="submit">Login</button>
            </form>
            </StyledLoginContainer>
        </div>
    );
};

export default LoginForm;