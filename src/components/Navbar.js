import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components'

const StyledNavContainer = styled.nav`
    align-items: center;
    background-color: lightskyblue;
    border-bottom: 2px solid black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 50px;
    width: 100vw;
    text-align: center;
`

function Navbar() {
    return (
        <div>
            <StyledNavContainer className="z-depth-0">
                <div className="nav-wrapper white">
                    <Link to="/">
                        <h2>dote</h2>
                    </Link>
                </div>
            </StyledNavContainer>
        </div>
    );
}

export default Navbar;