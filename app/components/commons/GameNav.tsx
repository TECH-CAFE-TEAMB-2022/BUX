import { Button, Card, Container, Modal, Spacer, Text } from "@nextui-org/react";
import { useRouter } from "next/router";
import { type } from "os";
import React, { Dispatch, SetStateAction, useState } from "react";
import { Icon } from "./Icon";

type GameNav = {
  currentLife: number;
  questionNum: number;
  currentAnswer: number;
  setShowAnswer: Dispatch<SetStateAction<boolean>>;
  showAnswer: boolean;
};

export const GameNav = ({
  currentLife,
  questionNum,
  currentAnswer,
  setShowAnswer,
  showAnswer,
}: GameNav) => {
  const router = useRouter();

  const handleClickPageBack = () => {
    router.back();
  };
  const [visible, setVisible] = useState(false);
  const handlerClickModal = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
  };

  const handleClickAnswer = () => {
    setShowAnswer(true);
  };

  return (
    <>
      <Container>
        <Button
          auto
          flat
          css={{ position: "fixed", bottom: "$5", left: "$5", background: "#000", zIndex: "$5" }}
          icon={<Icon width={30} height={30} alt="戻る" src="/icons/cancel.svg" />}
          onClick={handleClickPageBack}
        />
        <Button
          bordered
          css={{ position: "fixed", bottom: "20px", right: "100px", borderColor: "$accents1" }}
          color={"default"}
          auto
          disabled
        >
          <Text color="#FE4444" weight={"bold"}>
            ❤{currentLife}
          </Text>
        </Button>
        <Button
          bordered
          css={{ position: "fixed", bottom: "20px", right: "10px", borderColor: "$accents1" }}
          color={"default"}
          auto
          disabled
        >
          <Text color="#000" weight={"bold"}>
            {currentAnswer} / {questionNum}
          </Text>
        </Button>
        {showAnswer || (
          <Button
            bordered
            css={{
              position: "fixed",
              bottom: "70px",
              right: "10px",
              borderColor: "$accents1",
              borderRadius: "50px",
              zIndex: "$max",
            }}
            color={"default"}
            auto
            icon={<Icon width={30} height={30} alt="答えを表示する" src="/icons/answer.svg" />}
            onClick={handlerClickModal}
          />
        )}
      </Container>

      <Modal closeButton blur aria-labelledby="modal-title" open={visible} onClose={closeHandler}>
        <Modal.Header autoMargin justify="center">
          <Text id="modal-title" size={30} b>
            答えを表示しますか？
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Text size={18} b>
            現在のスコア{" "}
            <Text css={{ textAlign: "center" }} size={30}>
              {currentAnswer} / {questionNum}
            </Text>
          </Text>
        </Modal.Body>
        <Modal.Footer justify="center">
          <Button auto flat color="error" onClick={closeHandler}>
            もどる
          </Button>
          <Button
            auto
            onClick={() => {
              closeHandler();
              handleClickAnswer();
            }}
          >
            表示する
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};