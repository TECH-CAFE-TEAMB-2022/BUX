import { Button, Popover, Text } from "@nextui-org/react";
import React from "react";
import { NeedAnswer } from "../../../types";
import { AnswerPop } from "../../commons/AnswerPop";
import { Modal } from "../../commons/Modal";

type Props = {
  isOpen: boolean;
  onClickAgree: () => void;
  onClickCancel: () => void;
  onClose: () => void;
}&NeedAnswer;

export const CancelModal = ({
  isOpen,
  onClickAgree,
  onClickCancel,
  onClose,
  handleClickAnswer,
  showAnswer
}: Props): JSX.Element => {
  return (
    <Modal
      title="確認"
      content={
        <Popover placement="top" isDismissable={false} isOpen={showAnswer ? true : undefined}>

        <Popover.Trigger>
          <Text onClick={(e)=>handleClickAnswer(e,4)}>キャンセルします。よろしいですか？</Text>
        </Popover.Trigger>
        <AnswerPop showAnswer={showAnswer} zIndex={true}/>
        </Popover>
    }
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
