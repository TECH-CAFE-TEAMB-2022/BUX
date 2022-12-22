import { Container, Grid } from "@nextui-org/react";
import { useRouter } from "next/router";
import React from "react";
import { LEVEL } from "../../constants/leval";
import { useSignInWithGoogle } from "../../hooks/auth/useSignIn";
import { pagesPath } from "../../lib/$path";
import LoginButton from "../ui/LoginButton";

export const HomePage = (): JSX.Element => {
  const { mutate: login } = useSignInWithGoogle();
  const router = useRouter();
  const handleSuccess = () => {
    router.push(pagesPath.stages._level(LEVEL.NORMAL).$url());
  };
  const handleClickSignIn = () => {
    login({ onSuccess: handleSuccess });
  };
  return (
    <Container fluid css={{ h: "100vh" }} display="flex" alignItems="center">
      <Grid.Container justify="center">
        <Grid>
          <LoginButton onClick={handleClickSignIn} />
        </Grid>
      </Grid.Container>
    </Container>
  );
};
