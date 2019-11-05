import React, { useContext } from "react";
import UserContext from '../context/UserContext'
import { Link } from "react-router-dom";
import styled from 'styled-components'

const StyledNavContainer = styled.nav`
    align-items: center;
    background-color: lightskyblue;
    border-bottom: 2px solid black;
    display: flex;
    justify-content: space-around;
    height: 50px;
    width: 100vw;
    text-align: center;
`

const StyledStatusContainer = styled.section`
    align-items: center;
    display: flex;
    justify-content: center;
`

const StyledStatusItem = styled.div`
    border: 2px solid black;
    background-color: white;
    padding: 5px;
    margin: 5px;
    font-weight: bolder;
`

const StyledUsernameContainer = styled.span`
    margin: 5px;
`

const UsernameHighlight = styled.span`
    font-weight: bolder;
`

const Navbar = () => {

    var { user, setUser } = useContext(UserContext)

    const logout = () => {
        setUser(null)
    }

    return (
        <div>
            <StyledNavContainer>
                <StyledStatusContainer>
                    <Link to="/">
                        <h2>dote</h2>
                    </Link>
                </StyledStatusContainer>
                {user ? (
                    <StyledStatusContainer>
                        <Link to="newPost/">
                            <StyledStatusItem>New Post</StyledStatusItem>
                        </Link>
                        <Link to="#">
                            <StyledStatusItem>Profile</StyledStatusItem>
                        </Link>
                        <Link to="/">
                            <StyledStatusItem onclick={logout}>Logout</StyledStatusItem>
                        </Link>
                        <StyledUsernameContainer>
                            Logged in as <br/> <UsernameHighlight>{user.username}</UsernameHighlight>
                        </StyledUsernameContainer>
                    </StyledStatusContainer>
                ) : (
                    <StyledStatusContainer>
                        <Link to="login/">
                            <StyledStatusItem>Login</StyledStatusItem>
                        </Link>
                        <Link to="register/">
                            <StyledStatusItem>Register</StyledStatusItem>
                        </Link>
                    </StyledStatusContainer>
                )}
            </StyledNavContainer>
        </div>
    );
}

export default Navbar;