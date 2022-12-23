/**
 * コンポーネント表示の条件分岐
 */
import React, { useEffect, useState } from "react";
import { Overlay } from "../../../commons/Overlay";
import { useConvertStage } from "../../../../hooks/useConvertStage";
import { Modal } from "../../../commons/Modal";
import { useDisclosure } from "../../../../hooks/useDisclosure";
import { Button, Grid, Row } from "@nextui-org/react";

type Props = {
  id: number;
};

export const Stages = ({ id }: Props) => {
  const { Component: Name, questionNum } = useConvertStage(id);
  const {
    isOpen: isOpenGameOverModal,
    close: closeGameOverModal,
    open: openGameOverModal,
  } = useDisclosure();

  const [currentLife, setCurrentLife] = useState(10);
  const [currentAnswer, setCurrentAnswer] = useState(0);
  const [questionIDs, setQuestionIDs] = useState<number[]>([]);

  const handleClickAnswer = (e: React.MouseEvent<unknown, MouseEvent>, questionID: number) => {
    if (10 > currentLife && !questionIDs.includes(questionID)) {
      setCurrentLife(currentLife + 1);
    }
    // 問題数より正解数が少ないかつ、すでに答えていないとき
    if (questionNum > currentAnswer && !questionIDs.includes(questionID)) {
      //   console.log(questionID);
      //   console.log(questionIDs);
      setQuestionIDs((before) => [...before, questionID]);
      setCurrentAnswer(currentAnswer + 1);
    }
    e.stopPropagation();
  };

  const handleClickMistake = () => {
    if (currentLife <= 0) return;
    setCurrentLife(currentLife - 1);
  };

  useEffect(() => {
    if (currentLife > 0) return;
    openGameOverModal();
  }, [currentLife]);
  return (
    <>
      <Overlay handleClickMistake={handleClickMistake} />
      <Name
        questionNum={questionNum}
        currentLife={currentLife}
        currentAnswer={currentAnswer}
        handleClickAnswer={handleClickAnswer}
        handleClickMistake={handleClickMistake}
      />
      <Modal
        isOpen={isOpenGameOverModal}
        onClose={closeGameOverModal}
        title={"GAME OVER"}
        content={
          <Grid.Container gap={2} justify="center">
            <Grid sm={12}>
              <Button auto bordered>
                戻る
              </Button>
            </Grid>
            <Grid sm={12}>
              <Button auto>もう一度</Button>
            </Grid>
          </Grid.Container>
        }
        preventClose
      />
    </>
  );
};
