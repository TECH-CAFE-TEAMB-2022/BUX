import { Modal, Popover, Button, Text, Grid, Card } from "@nextui-org/react";
import React, { useState } from "react";
import { AnswerBody } from "./AnswerBody";
import { Icon } from "./Icon";
import Data from '../../data/dummy.json'; 

type Props = {
  showAnswer: boolean;
};
export const AnswerPop = ({ showAnswer }: Props) => {
  const [modal, setModal] = useState(false);
  const handlerClickModal = () => setModal(true);
  const {src,title,text} = Data[1]["question1"]

  const closeHandler = () => {
    setModal(false);
  };

  return (
    <>
      <Popover.Content onClick={handlerClickModal} css={{ zIndex: "$1!important" }}>
        <Icon
          src={showAnswer ? "/icons/question.svg" : "/icons/answerCircle.svg"}
          width={50}
          height={50}
          alt="正解の丸"
        />
      </Popover.Content>

      <Modal
        open={modal}
        onClose={closeHandler}
        closeButton
        fullScreen
        aria-labelledby="modal-title"
        css={{ zIndex: "$max", position: "absolute" }}
      >
        <Modal.Body>
          <AnswerBody  src={src} title={title} text={text}/>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onClick={closeHandler}>
            もどる
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};