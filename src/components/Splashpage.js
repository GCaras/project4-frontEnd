import React from "react"
import styled from 'styled-components'
import BlogPostList from './BlogPostList'

const StyledButtonContainer = styled.section`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
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