import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setToken } from '../actions/authActions';
import { loginUser } from '../services/authService';
import AuthRequestModel from '../models/registerRequestModel';
import { Button, FormGroup, Input, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [authRequest, setAuthRequest] = useState(new AuthRequestModel());
  const [errorText, setErrorText] = useState(null);
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    const token = await loginUser(authRequest)
    if (!token) {
      setErrorText("Непредвиденная ошибка, попробуйте еще раз");
      return;
    }
    dispatch(setToken(token));
    navigate("/user-profile")
  };
  return (
    <div>
      <Typography vatiant="h2">
        Login
      </Typography>
      {errorText && <Typography>{errorText}</Typography>}
      <FormGroup>
        <Input
          type="email"
          placeholder="Email"
          value={authRequest.email}
          onChange={(e) => setAuthRequest(prev => ({ ...prev, email: e.target.value }))}
        />
        <Input
          type="password"
          placeholder="Password"
          value={authRequest.password}
          onChange={(e) => setAuthRequest(prev => ({ ...prev, password: e.target.value }))}
        />
        <Button
          disabled={authRequest.email.lenght === 0 || authRequest.password.lenght === 0}
          onClick={handleSubmit}
          type="submit">Login
        </Button>
      </FormGroup>
    </div>
  );
};

export default LoginPage;
