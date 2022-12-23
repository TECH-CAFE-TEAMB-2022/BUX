import { Button, Text } from "@nextui-org/react";
import React from "react";
import { Modal } from "../../commons/Modal";

type Props = {
  isOpen: boolean;
  onClickAgree: () => void;
  onClickCancel: () => void;
  onClose: () => void;
};

export const AgreeModal = ({
  isOpen,
  onClickAgree,
  onClickCancel,
  onClose,
}: Props): JSX.Element => {
  return (
    <Modal
      title="同意する"
      content={<Text>キャンセルします。よろしいですか？</Text>}
      isOpen={isOpen}
      onClose={onClose}
      buttons={
        <>
          <Button auto bordered onClick={onClickCancel}>
            キャンセル
          </Button>
          <Button onClick={onClickAgree} auto>
            OK
          </Button>
        </>
      }
    ></Modal>
  );
};
