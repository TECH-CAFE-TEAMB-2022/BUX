import { Button, Text } from "@nextui-org/react";
import React from "react";
import { Modal } from "../../commons/Modal";

type Props = {
  isOpen: boolean;
  onClickAgree: () => void;
  onClickChancel: () => void;
};

export const CancelModal = ({ isOpen, onClickAgree, onClickChancel }: Props): JSX.Element => {
  return (
    <Modal
      title="確認"
      content={<Text>キャンセルします。よろしいですか？</Text>}
      isOpen={isOpen}
      buttons={
        <>
          <Button auto bordered onClick={onClickChancel}>
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
