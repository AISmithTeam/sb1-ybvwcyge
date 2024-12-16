import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import AuthLayout from '../../components/auth/AuthLayout';
import SignupForm from '../../components/auth/SignupForm';
import AuthDivider from '../../components/auth/AuthDivider';
import SocialAuth from '../../components/auth/SocialAuth';
import AuthFooter from '../../components/auth/AuthFooter';

const SignupPage = () => {
  const { signup, isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/assistants" />;
  }

  return (
    <AuthLayout
      title="Create an account"
      subtitle="Get started with your free account"
    >
      <SignupForm onSubmit={signup} />
      <AuthDivider />
      <SocialAuth />
      <AuthFooter
        text="Already have an account?"
        linkText="Sign in"
        linkTo="/login"
      />
    </AuthLayout>
  );
};

export default SignupPage;