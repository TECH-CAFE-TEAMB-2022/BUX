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
import React, { FC, useState, VFC } from "react";
import { useDisclosure } from "../../../hooks/useDisclosure";
import { Account, Game } from "../../../types";
import { initFromValue } from "./constants";
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
  const [formValue, setFromValue] = useState<Account>({ ...initFromValue });
  const [haasError, setHasError] = useState(false);
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

  const [isPureesAgree, setIsPureesAgree] = useState(false);

  const isValid = (value: Account): boolean => {
    console.log(value.name);
    if (!value.name) false;
    return true;
  };
  const handleClickAgree = () => {
    setIsPureesAgree(true);
  };
  const handleCloseAgreeModal = () => {
    closeAgreeModal();
    setIsPureesAgree(false);
  };

  const handleClickRegister = () => {
    if (!isValid(formValue)) {
      setHasError(true);
      return;
    }
    openAgreeModal();
  };
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
              {haasError && <Text>どこか間違っています</Text>}
              <RegisterBody formValue={formValue} />
            </Card.Body>
            <Card.Footer>
              <RegisterButtonGroup
                onClickCancel={openCancelModal}
                onClickRegister={handleClickRegister}
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
        onClickCancel={handleCloseAgreeModal}
        onClose={closeAgreeModal}
        onClickAgree={handleClickAgree}
        isPurees={isPureesAgree}
      />
    </Container>
  );
};
