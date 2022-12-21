import { Button, Container, Spacer, Text } from "@nextui-org/react";
import React from "react";
import { Icon } from "./Icon";
export const GameNav = () => {
  return (
    <Container>
      <Button 
      auto
      flat  
      css={{ position: "fixed", top:"$5",left:"$5",background:"#000"}} 
      icon={<Icon width={30} height={30} alt="戻る" src="/icons/cancel.svg"/>}>

      </Button>
    </Container>
  );
};
