import React from 'react'
import useRegistrationForm from '../hooks/useRegistrationFormHooks'
import styled from 'styled-components'

const StyledRegistrationContainer = styled.section`
    background-color: lightskyblue;
    border: 2px solid black;
    padding: 10px;
`
const StyledInputPiece = styled.div`
    margin: 10px;
`

const RegistrationForm = () => {
    const { values, handleRegistrationChange, handleRegistrationSubmit } = useRegistrationForm({username: '', email: '', password: '', confirmPassword: ''}, register)

    function register() {
        console.log(values)
    }

    return (
        <div className="box">
            <StyledRegistrationContainer>
                <form onSubmit={handleRegistrationSubmit}>
                    <h2>Register</h2>
                    <StyledInputPiece>
                        <label>Username</label>
                        <div>
                            <input
                                type="username"
                                name="username"
                                onChange={handleRegistrationChange}
                                value={values.username}
                                required
                                />
                        </div>
                    </StyledInputPiece>
                    <StyledInputPiece>
                        <label>Email Address</label>
                        <div>
                            <input
                                type="email"
                                name="email"
                                onChange={handleRegistrationChange}
                                value={values.email}
                                required
                            />
                        </div>
                    </StyledInputPiece>
                    <StyledInputPiece>
                        <label>Password</label>
                        <div>
                            <input
                                type="new-password"
                                name="password"
                                onChange={handleRegistrationChange}
                                value={values.password}
                                required
                                />
                        </div>
                    </StyledInputPiece>
                    <StyledInputPiece>
                        <label>Confirm Password</label>
                        <div>
                            <input
                                type="new-password"
                                name="confirmPassword"
                                onChange={handleRegistrationChange}
                                value={values.confirmPassword}
                                required
                                />
                        </div>
                    </StyledInputPiece>
                    <button type="submit">Register</button>
                </form>
            </StyledRegistrationContainer>
        </div>
    );
};

export default RegistrationForm;