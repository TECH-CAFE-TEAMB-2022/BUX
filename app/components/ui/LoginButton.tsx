import { Button, Spacer } from "@nextui-org/react";
import React from "react";
import { GoogleIcon } from "../icons/GoogleIcon";

type Props = {
  onClick: () => void;
};

const LoginButton = ({ onClick }: Props): JSX.Element => {
  return (
    <Button
      onClick={onClick}
      bordered
      icon={<GoogleIcon />}
      auto
      css={{
        bgColor: "$white",
        color: "$gray800",
        borderColor: "$gray400",
        fontWeight: "$bold",
      }}
    >
      Googleでログインする
    </Button>
  );
};

export default LoginButton;
