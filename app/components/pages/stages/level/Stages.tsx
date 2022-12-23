/**
 * コンポーネント表示の条件分岐
 */
import React, { useState } from "react";
import { Twitter } from "../../../normal/Twitter/index";
import Image from "next/image";
import { Button, Container, Grid, Popover, Tooltip } from "@nextui-org/react";
import { Icon } from "../../../commons/Icon";
import { Register } from "../../../easy/Register";
import RegistForm from "../../../normal/RegistForm";

import { Overlay } from "../../../commons/Overlay";
import { useConvertStage } from "../../../../hooks/useConvertStage";

type Props = {
  id: number;
};

export const Stages = ({ id }: Props) => {
  const { Component: Name } = useConvertStage(id);

  const questionNum = 5;
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
    setCurrentLife(currentLife - 1);
  };

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
    </>
  );
};
