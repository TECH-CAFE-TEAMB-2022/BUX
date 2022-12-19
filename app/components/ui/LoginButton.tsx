import { Button } from "@nextui-org/react";
import React from "react";

interface Props {
  onClick: () => void;
}

const LoginButton = ({ onClick }: Props): JSX.Element => {
  return <Button onClick={onClick}>Googleでログインする</Button>;
};

export default LoginButton;
