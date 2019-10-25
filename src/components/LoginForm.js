import React, { useContext, useState, useEffect } from 'react';
import useForm from '../hooks/useLoginFormHook'
import validate from '../hooks/useEmailValidationRules'
import styled from 'styled-components'
import { UserContext } from '../context/UserContext'
import axios from 'axios'



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

const LoginForm = (props) => {

    const { setUser } = useContext(UserContext);

    const [usersArr, setUsersArr] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const result = await axios.get('http://127.0.0.1:8000/users/');
            console.log(result.data)
            setUsersArr(result.data)
        };
        fetchUsers();
    }, [])

    const login = (email, password) => {
        email = values.email
        password = values.password
        const userLog = usersArr.find(user => user.email === email)
        console.log(userLog)
        if(userLog.password === password) {
            setUser(userLog)
            props.history.push("/bloglist")
            console.log("Success!")
        } else {
            alert("Incorrect username/password")
        }
    }
    
    //email validation & error display for form input
    const { values, errors, handleLoginChange, handleLoginSubmit } = useForm(login, validate)


    


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
            </form>
            <button onClick={login}>Login</button>
            </StyledLoginContainer>
        </div>
    );
};

export default LoginForm;