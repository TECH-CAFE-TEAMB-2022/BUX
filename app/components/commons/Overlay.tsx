import { Card, Container, Spacer } from "@nextui-org/react";
import React from "react";

type Props={
    handleClickMistake:()=>void
}
export const Overlay = ({handleClickMistake}:Props) => {
  return (
    <></>
      // <Container css={{ position: "fixed", top: "0px", width: "100%", height: "100%",zIndex:"2"}} onClick={handleClickMistake}/>    
  );
};
