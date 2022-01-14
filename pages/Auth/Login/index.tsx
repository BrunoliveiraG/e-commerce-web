import React from 'react';
import MainComponent from "../../../components/shared/MainComponent";
import LoginForm from "../../../components/LoginForm";

const Login: React.FC = () => {
  return (
    <MainComponent>
      <LoginForm titlePhrase="Access my account" buttonPhrase="Log In" />
    </MainComponent>
  )
}

export default Login;