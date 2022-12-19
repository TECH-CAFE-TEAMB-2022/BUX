import React from "react";
import { useSignInWithGoogle } from "../../hooks/auth/useSignIn";
import LoginButton from "../ui/LoginButton";

export const Page = (): JSX.Element => {
  const { mutate: login } = useSignInWithGoogle();
  return <LoginButton onClick={login} />;
};
