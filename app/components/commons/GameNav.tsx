import { Button, Card, Container, Spacer, Text } from "@nextui-org/react";
import { useRouter } from "next/router";
import { type } from "os";
import React, { useState } from "react";
import { Icon } from "./Icon";

type GameNav={
  currentLife:number
  questionNum:number
  currentAnswer:number
}

export const GameNav = ({ currentLife,questionNum,currentAnswer }:GameNav) => {
  const router = useRouter();

  const handleClickPageBack=()=>{
    router.back()
  }

  return (
    <Container>
      <Button
        auto
        flat
        css={{ position: "fixed", bottom: "$5", left: "$5", background: "#000",zIndex:"$5"}}
        icon={<Icon width={30} height={30} alt="戻る" src="/icons/cancel.svg" />}
        onClick={handleClickPageBack}
      />
      <Button
        bordered
        css={{ position: "fixed", bottom: "20px", right: "100px", borderColor: "$accents1" }}
        color={"default"}
        auto
        disabled
      >
        <Text color="#FE4444" weight={"bold"}>
          ❤{currentLife}
        </Text>
      </Button>
      <Button
        bordered
        css={{ position: "fixed", bottom: "20px", right: "10px", borderColor: "$accents1" }}
        color={"default"}
        auto
        disabled
      >
        <Text color="#000" weight={"bold"}>
          {currentAnswer} / {questionNum}
        </Text>
      </Button>
      <Button
        bordered
        css={{
          position: "fixed",
          bottom: "70px",
          right: "10px",
          borderColor: "$accents1",
          borderRadius: "50px",
          zIndex:"$max"
        }}
        color={"default"}
        auto
        icon={<Icon width={30} height={30} alt="戻る" src="/icons/answer.svg" />}
      />
    </Container>
  );
};
