import React from "react"
import { Link } from "react-router-dom"
import styled from 'styled-components'
import BlogPostList from './BlogPostList'

const StyledButtonContainer = styled.section`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const StyledClickH2 = styled.h2`
    background-color: lightskyblue;
    border: 2px solid black;
    margin: 5px;
    padding: 5px;
    max-width: 125px;
    min-width: 110px;
`

const SplashPage = () => {
    return (
        <div>
            <div>
                <StyledButtonContainer>
                    <h3>Connect to your favorite story-tellers</h3>
                    <p>Splash page for Dote app.</p>
                    <BlogPostList/>
                </StyledButtonContainer>
            </div>
        </div>
    );
}
export default SplashPage;