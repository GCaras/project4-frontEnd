import React, { useContext } from "react";
import UserContext from '../context/UserContext'
import useNewBlogPostHooks from "../hooks/useNewBlogPostHooks";
import styled from "styled-components";
import axios from "axios";

const StyledRegistrationContainer = styled.section`
  background-color: lightskyblue;
  border: 2px solid black;
  padding: 10px;
  width: 50vw;
`;
const StyledTitleInput = styled.div`
  margin: 10px;
`;

const StyledBodyInput = styled.div`
  margin: 10px;
`;

const NewBlogPost = (props) => {

    const { user } = useContext(UserContext)

    const newPost = () => {
        axios.post("http://localhost:8000/blogposts/", {
            title: values.title,
            body: values.body,
            user: user.id
        })
        .then(function (response) {
        console.log(response);
        })
        .catch(function (error) {
        console.log(error);
        });
        props.history.push("/bloglist")
    }

  const {
    values,
    handleNewBlogPostChange,
    handleNewBlogPostSubmit
  } = useNewBlogPostHooks(
    { title: "", body: "", user: "" },
    newPost
  );

  return (
    <div className="box">
      <StyledRegistrationContainer>
        <form onSubmit={handleNewBlogPostSubmit}>
          <h2>Create a new blog post!</h2>
          <StyledTitleInput>
            <label>Title</label>
            <div>
              <input
                type="title"
                name="title"
                onChange={handleNewBlogPostChange}
                value={values.title}
                required
              />
            </div>
          </StyledTitleInput>
          <StyledBodyInput>
            <label>Body</label>
            <div>
              <input
                type="body  "
                name="body"
                onChange={handleNewBlogPostChange}
                value={values.body}
                required
              />
            </div>
          </StyledBodyInput>
          <button onClick={newPost} type="submit">
            Submit New Post
          </button>
        </form>
      </StyledRegistrationContainer>
    </div>
  );
};

export default NewBlogPost;