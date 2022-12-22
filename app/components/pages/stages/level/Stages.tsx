/**
 * コンポーネント表示の条件分岐
 */
import React, { useState} from "react";
import { Twitter } from "../../../normal/Twitter/index";
import { Overlay } from "../../../commons/Overlay";

type Props = {
  level: string;
  id: number;
};
export const Stages = ({ level, id }: Props) => {
  const Name = Twitter;
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
