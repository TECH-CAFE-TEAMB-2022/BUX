/**
 * コンポーネント表示の条件分岐
 */

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useConvertStage } from "../../../../hooks/useConvertStage";
import { Modal } from "../../../commons/Modal";
import { useDisclosure } from "../../../../hooks/useDisclosure";
import { Button, Container, Grid, Row } from "@nextui-org/react";
import { useRouter } from "next/router";
import { pagesPath } from "../../../../lib/$path";
import { LEVEL } from "../../../../constants/leval";
import { GameOverModal } from "./_GameOverModal";
import { GameClearModal } from "./_GemaClearModal";

type Props = {
  id: number;
};
export const Stages = ({ id }: Props) => {
  const { Component: Name, questionNum, level } = useConvertStage(id);

  const {
    isOpen: isOpenGameOverModal,
    close: closeGameOverModal,
    open: openGameOverModal,
  } = useDisclosure();
  const {
    isOpen: isOpenGameClearModal,
    close: closeGameClearModal,
    open: openGameClearModal,
  } = useDisclosure();

  const router = useRouter();

  const [currentLife, setCurrentLife] = useState(10);
  const [currentAnswer, setCurrentAnswer] = useState(0);
  const [questionIDs, setQuestionIDs] = useState<number[]>([]);
  const [pageX, setPageX] = useState(0);
  const [pageY, setPageY] = useState(0);
  const [mistakeVisible, setMistakeVisible] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleClickAnswer = (e: React.MouseEvent<unknown, MouseEvent>, questionID: number) => {
    if (!showAnswer) {
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
      setMistakeVisible(false);
      e.stopPropagation();
    }
  };

  const handleClickContiner = (e: React.MouseEvent<unknown, MouseEvent>) => {
    if (currentLife <= 0) return;
    if (!showAnswer) {
      setPageX(e.pageX);
      setPageY(e.pageY);
      setMistakeVisible(true);
      setCurrentLife(currentLife - 1);
    }
  };
  const handleClickBack = () => {
    router.push(pagesPath.stages._level(level).$url());
  };

  const handleClickReTry = () => {
    router.reload();
  };

  const handleClickNext = () => {
    closeGameClearModal();
    router.push(
      pagesPath.stages
        ._level(level)
        ._id(id + 1)
        .$url(),
    );
  };

  useEffect(() => {
    if (currentLife > 0) return;
    openGameOverModal();
  }, [currentLife]);

  useEffect(() => {
    if (currentAnswer < questionNum) return;
    openGameClearModal();
  }, [currentAnswer]);

  const handleMouseDownMistake = () => {
    if (!showAnswer) {
      setMistakeVisible(false);
    }
  };
  if (!Name) return null;
  return (
    <>
      <Container
        onClick={(e) => {
          handleClickContiner(e);
        }}
        onMouseDown={handleMouseDownMistake}
      >
        <Name
          questionNum={questionNum}
          currentLife={currentLife}
          currentAnswer={currentAnswer}
          handleClickAnswer={handleClickAnswer}
          setShowAnswer={setShowAnswer}
          showAnswer={showAnswer}
        />
      </Container>

      <GameClearModal
        isOpen={isOpenGameClearModal}
        onClickBack={handleClickBack}
        onClickNext={handleClickNext}
        onClose={closeGameClearModal}
      />
      <GameOverModal
        isOpen={isOpenGameOverModal}
        onClickBack={handleClickBack}
        onClickRetry={handleClickReTry}
        onClose={closeGameOverModal}
      />
      {mistakeVisible === true && showAnswer === false && (
        <Image
          src="/icons/mistake.svg"
          width={100}
          height={100}
          alt="不正解"
          style={{
            position: "absolute",
            left: pageX,
            top: pageY,
            zIndex: "$max",
            animation: "toinvisible 0.1s forwards",
          }}
        />
      )}
      <style>
        {`@keyframes toinvisible {
        0% {
          scale:0;
        }
        100% {
          scale:1;
        }
      }`}
      </style>
    </>
  );
};
