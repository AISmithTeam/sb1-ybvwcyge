import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import AuthLayout from '../../components/auth/AuthLayout';
import LoginForm from '../../components/auth/LoginForm';
import AuthDivider from '../../components/auth/AuthDivider';
import SocialAuth from '../../components/auth/SocialAuth';
import AuthFooter from '../../components/auth/AuthFooter';

const LoginPage = () => {
  const { login, isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/assistants" />;
  }

  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Sign in to your account to continue"
    >
      <LoginForm onSubmit={login} />
      <AuthDivider />
      <SocialAuth />
      <AuthFooter
        text="Don't have an account?"
        linkText="Sign up"
        linkTo="/signup"
      />
    </AuthLayout>
  );
};

export default LoginPage;