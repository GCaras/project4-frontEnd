import React from "react";
import useRegistrationForm from "../hooks/useRegistrationFormHooks";
import styled from "styled-components";
import axios from "axios";

const StyledRegistrationContainer = styled.section`
  background-color: lightskyblue;
  border: 2px solid black;
  padding: 10px;
`;
const StyledInputPiece = styled.div`
  margin: 10px;
`;

const RegistrationForm = (props) => {
  const register = () => {
    const user = {
      username: values.email,
      email: values.email,
      password: values.password
    };
    axios
      .post("http://127.0.0.1:8000/users/", { user })
      .then(res => console.log(res));
      props.history.push("/login")
  };

  const {
    values,
    handleRegistrationChange,
    handleRegistrationSubmit
  } = useRegistrationForm(
    { username: "", email: "", password: "", confirmPassword: "" },
    register
  );

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
          <button onClick={register} type="submit">
            Register
          </button>
        </form>
      </StyledRegistrationContainer>
    </div>
  );
};

export default RegistrationForm;
