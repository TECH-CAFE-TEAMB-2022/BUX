import { Button, Loading, Text } from "@nextui-org/react";
import React, { useState } from "react";
import { Modal } from "../../commons/Modal";
import { RuleBody } from "./_RuleBody";

type Props = {
  isPurees: boolean;
  isOpen: boolean;
  onClickAgree: () => void;
  onClickCancel: () => void;
  onClose: () => void;
};

export const AgreeModal = ({
  isPurees,
  isOpen,
  onClickAgree,
  onClickCancel,
  onClose,
}: Props): JSX.Element => {
  return (
    <Modal
      title="同意する"
      content={<RuleBody />}
      isOpen={isOpen}
      onClose={onClose}
      buttons={
        <>
          <Button bordered onClick={onClickAgree} auto>
            {isPurees ? <Loading type="spinner" size="lg" /> : "OK"}
          </Button>
          <Button auto onClick={onClickCancel}>
            キャンセル
          </Button>
        </>
      }
    ></Modal>
  );
};
