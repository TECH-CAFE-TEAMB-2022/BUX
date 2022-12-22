import {
  Button,
  Card,
  Col,
  Container,
  Grid,
  Input,
  Radio,
  Row,
  Spacer,
  Text,
} from "@nextui-org/react";
import React, { FC, VFC } from "react";
import { useDisclosure } from "../../../hooks/useDisclosure";
import { Game } from "../../../types";
import { CancelModal } from "./_CancelModal";
import { RegisterBody } from "./_RegisterBody";
import { RegisterButtonGroup } from "./_RegisterButtonGroup";

export const Register = ({
  questionNum,
  currentLife,
  currentAnswer,
  handleClickAnswer,
  handleClickMistake,
}: Game) => {
  const { isOpen, close, open } = useDisclosure();
  return (
    <Container css={{ h: "100vh" }} display="flex" alignItems="center">
      <Grid.Container justify="center">
        <Grid xs={12} sm={5}>
          <Card>
            <Card.Header css={{ display: "flex", justifyContent: "center" }}>
              <Text h1 size={24}>
                新規登録
              </Text>
            </Card.Header>
            <Card.Divider />
            <Card.Body css={{ px: 12 }}>
              <RegisterBody />
            </Card.Body>
            <Card.Footer>
              <RegisterButtonGroup onClickCancel={open} />
            </Card.Footer>
          </Card>
        </Grid>
      </Grid.Container>
      <CancelModal isOpen={isOpen} onClickChancel={close} onClickAgree={close} />
    </Container>
  );
};
