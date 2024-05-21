import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import styled from 'styled-components';

const RegisterPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
  font-family: 'Arial', sans-serif;
`;

const RegisterForm = styled.form`
  background: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
  text-align: center;
`;

const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 2rem;
  color: #333;
`;

const InputGroup = styled.div`
  margin-bottom: 20px;
  text-align: left;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-size: 1rem;
  color: #555;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  transition: border-color 0.3s;

  &:focus {
    border-color: #007BFF;
    outline: none;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  font-size: 1.25rem;
  background: #007BFF;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #0056b3;
  }
`;

const LogoutButton = styled.button`
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  background: #ff4d4d;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
  margin-top: 10px;

  &:hover {
    background: #cc0000;
  }
`;

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { register, logout } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    register(username, password);
  };

  return (
    <RegisterPage>
      <RegisterForm onSubmit={handleSubmit}>
        <Title>Register</Title>
        <InputGroup>
          <Label>Username</Label>
          <Input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </InputGroup>
        <InputGroup>
          <Label>Password</Label>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </InputGroup>
        <Button type="submit">Register</Button>
        <LogoutButton type="button" onClick={logout}>
          Logout
        </LogoutButton>
      </RegisterForm>
    </RegisterPage>
  );
};

export default Register;
