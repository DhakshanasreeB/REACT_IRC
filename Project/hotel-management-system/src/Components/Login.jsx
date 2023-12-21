import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../contexts/UserAuthContext";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const StyledBox = styled.div`
  max-width: 400px;
  width: 100%;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const StyledTitle = styled.h2`
  text-align: center;
  color: #333;
  margin-bottom: 20px;
`;

const StyledForm = styled(Form)`
  .mb-3 {
    margin-bottom: 20px;
  }

  .form-control {
    border: 2px solid #ccc;
    border-radius: 5px;
    height: 40px;
    font-size: 16px;

    &:focus {
      border-color: #007bff;
      box-shadow: none;
    }
  }
`;

const StyledButton = styled.button`
  background-color: #007bff;
  padding: 10px;
  border-radius: 5px;
  color: white;
  border: none;
  font-size: 20px;
  width: 100%;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
    color: #fff;
    border: 2px solid #0056b3;
  }
`;

const StyledGoogleButton = styled(GoogleButton)`
  width: 100%;
`;

const StyledFooter = styled.div`
  margin-top: 20px;
  text-align: center;
  font-size: 16px;

  a {
    color: #007bff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <StyledContainer>
      <StyledBox>
        <StyledTitle>Login</StyledTitle>
        {error && <Alert variant="danger">{error}</Alert>}
        <StyledForm onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <StyledButton type="Submit">Log In</StyledButton>
          </div>
        </StyledForm>
        <hr />
        <div>
        <div className="d-grid gap-3">
          <StyledGoogleButton
            className="g-btn"
            type="dark"
            onClick={handleGoogleSignIn}
          />
          </div>
        </div>
        <StyledFooter className="p-4 box mt-3">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </StyledFooter>
      </StyledBox>
    </StyledContainer>
  );
};

export default Login;
