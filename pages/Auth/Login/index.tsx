import React from 'react';
import MainComponent from "../../../components/shared/MainComponent";
import LoginForm from "../../../components/LoginForm";
import SignUpForm from "../../../components/SignUpForm";

const Login: React.FC = () => {
  return (
    <MainComponent>
      <br />
      <LoginForm titlePhrase="Access my account" buttonPhrase="Log In" />
      <br />
      <SignUpForm titlePhrase="Create an account" buttonPhrase="Sign Up" />
    </MainComponent>
  )
}

export default Login;