// src/components/form/LoginForm.tsx
import React from 'react';
import InputBox from '../inputbox/InputBox';
import Button from '../button/Button';
import './LoginForm.css';

const LoginForm: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <InputBox label="Username" type="text" name="username" required />
        <InputBox label="Password" type="password" name="password" required />
        <Button type="submit">Login</Button>
      </form>
      <a href="/forgot-password" className="forgot-password">Forgot Password?</a>
    </div>
  );
};

export default LoginForm;
