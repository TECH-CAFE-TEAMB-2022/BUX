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
import { AgreeModal } from "./_AgreeModal";
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
  const {
    isOpen: isOpenCancelModal,
    close: closeCancelModal,
    open: openCancelModal,
  } = useDisclosure();

  const {
    isOpen: isOpenAgreeModal,
    close: closeAgreeModal,
    open: openAgreeModal,
  } = useDisclosure();
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
            <Card.Body css={{ px: 24 }}>
              <RegisterBody />
            </Card.Body>
            <Card.Footer>
              <RegisterButtonGroup
                onClickCancel={openCancelModal}
                onClickRegister={openAgreeModal}
              />
            </Card.Footer>
          </Card>
        </Grid>
      </Grid.Container>
      <CancelModal
        isOpen={isOpenCancelModal}
        onClickCancel={closeCancelModal}
        onClickAgree={closeCancelModal}
        onClose={closeCancelModal}
      />
      <AgreeModal
        isOpen={isOpenAgreeModal}
        onClickCancel={closeAgreeModal}
        onClickAgree={closeAgreeModal}
        onClose={closeAgreeModal}
      />
    </Container>
  );
};
