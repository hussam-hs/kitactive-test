import React, { useState } from 'react';
import { registerUser } from '../services/authService';
import { Button, FormGroup, Input, Typography } from '@mui/material';
import RegisterRequestModel from '../models/registerRequestModel';
import { useNavigate } from "react-router-dom";


const RegistrationPage = () => {
  const navigate = useNavigate();
  const [registerRequest, setRegisterRequest] = useState(new RegisterRequestModel());
  const [errorText, setErrorText] = useState(null);

  const handleSubmit = async () => {
    const isRegistered = await registerUser(registerRequest);
    if (!isRegistered) {
      setErrorText("Непредвиденная ошибка, попробуйте еще раз");
      return;
    }
    navigate("/");
  };

  return (
    <div>
      <Typography vatiant="h2">Registration</Typography>
      {errorText && <Typography>{errorText}</Typography>}
      <FormGroup>
        <Input
          type="email"
          placeholder="Email"
          value={registerRequest.email}
          onChange={(e) => setRegisterRequest(prev => ({ ...prev, email: e.target.value }))}
        />
        <Input
          type="password"
          placeholder="Password"
          value={registerRequest.password}
          onChange={(e) => setRegisterRequest(prev => ({ ...prev, password: e.target.value }))}
        />
        <Input
          type="text"
          placeholder="Name"
          value={registerRequest.name}
          onChange={(e) => setRegisterRequest(prev => ({ ...prev, name: e.target.value }))}
        />
        <Button onClick={handleSubmit}
          type="submit">
          Register
        </Button>
      </FormGroup>
    </div>
  );
};

export default RegistrationPage;
