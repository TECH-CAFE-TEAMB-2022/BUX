/**
 * コンポーネント表示の条件分岐
 */
import React, { useState, useCallback, use, memo } from "react";
import { Twitter } from "../components/normal/Twitter/index";

type Props = {
  level: string;
  id: number;
};
export const Stages = ({ level, id }: Props) => {
  const Name = Twitter;
  const questionNum = 5;
  const [currentLife, setCurrentLife] = useState(10);
  const [currentAnswer, setCurrentAnswer] = useState(0);
  const [questionIDs,setQuestionIDs] = useState<number[]>([]);

  const handleClickAnswer = (questionID: number) => {
    if (10 > currentLife) {
      setCurrentLife(currentLife + 1);
    }
    // 問題数より正解数が少ないかつ、すでに答えていないとき
    if (questionNum > currentAnswer && !questionIDs.includes(questionID)) {
        // console.log(questionID);
        // console.log(questionIDs);
        setQuestionIDs((before)=>[...before,questionID])
        setCurrentAnswer(currentAnswer + 1);
      }
  };

  return (
    <Name
      questionNum={questionNum}
      currentLife={currentLife}
      currentAnswer={currentAnswer}
      handleClickAnswer={handleClickAnswer}
    />
  );
};
