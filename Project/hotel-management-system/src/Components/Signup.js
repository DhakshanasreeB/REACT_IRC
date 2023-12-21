import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { useUserAuth } from "../contexts/UserAuthContext";
import styled from "styled-components";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { uid } from "uid";

const Button = styled.button`
  background-color: blue;
  padding: 10px;
  border-radius: 5px;
  color: white;
  border: none;
  font-size: 20px;
  width: 100%;

  &:hover {
    background-color: white;
    color: blue;
    border: 2px solid blue;
  }
`;

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const StyledBox = styled.div`
  width: 70%;
  max-width: 400px;
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

  .phoneInput {
    margin-bottom: 20px;
  }
`;

const Signup = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [value, setValue] = useState(0);
  const [error, setError] = useState("");
  const id = uid();
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password, name, value, id);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <StyledContainer>
      <StyledBox>
        <StyledTitle>Create your account.</StyledTitle>
        {error && <Alert variant="danger">{error}</Alert>}
        <StyledForm onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formbBasicText">
            <Form.Control
              type="text"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <PhoneInput
            defaultCountry="PK"
            className="phoneInput"
            id="number"
            placeholder="Enter phone number"
            value={value}
            onChange={setValue}
          />

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button type="Submit">Sign up</Button>
          </div>
        </StyledForm>
        <div className="p-4 box mt-3 text-center">
          Already have an account? <Link to="/">Log In</Link>
        </div>
      </StyledBox>
    </StyledContainer>
  );
};

export default Signup;
