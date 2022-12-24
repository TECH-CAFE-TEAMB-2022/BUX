import { Button, Row } from "@nextui-org/react";
import React from "react";
import { Modal } from "../../../commons/Modal";

type Props = {
  isOpen: boolean;
  onClickRetry: () => void;
  onClickBack: () => void;
  onClose: () => void;
};

export const GameOverModal = ({ isOpen, onClickRetry, onClickBack, onClose }: Props) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={"GAME OVER"}
      headerFontSize={50}
      content={
        <>
          <Row css={{ justifyContent: "space-evenly" }}>
            <Button auto bordered css={{ width: "40%" }} onClick={onClickBack}>
              戻る
            </Button>
            <Button auto onClick={onClickRetry} css={{ width: "40%" }}>
              もう一度
            </Button>
          </Row>
        </>
      }
      preventClose
    />
  );
};
