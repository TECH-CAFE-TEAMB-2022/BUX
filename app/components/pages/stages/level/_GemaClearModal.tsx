import { Button, Row } from "@nextui-org/react";
import React from "react";
import { Modal } from "../../../commons/Modal";

type Props = {
  isOpen: boolean;
  onClickNext: () => void;
  onClickBack: () => void;
  onClose: () => void;
};

export const GameClearModal = ({ isOpen, onClickNext, onClickBack, onClose }: Props) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={"GAME CLEAR !!"}
      headerFontSize={50}
      content={
        <>
          <Row css={{ justifyContent: "space-evenly" }}>
            <Button auto bordered css={{ width: "40%" }} onClick={onClickBack}>
              戻る
            </Button>
            <Button auto onClick={onClickNext} css={{ width: "40%" }}>
              次へ
            </Button>
          </Row>
        </>
      }
      preventClose
    />
  );
};
