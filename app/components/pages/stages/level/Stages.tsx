/**
 * コンポーネント表示の条件分岐
 */
import React, { useState } from "react";
import { Twitter } from "../../../normal/Twitter/index";
import Image from "next/image";
import { Button, Container, Grid, Popover, Tooltip } from "@nextui-org/react";
import { Icon } from "../../../commons/Icon";
import { Register } from "../../../easy/Register";
import RainbowBackGround from "../../../easy/RainbowBackGround";


type Props = {
  id: number;
};
export const Stages = ({ id }: Props) => {
  const Name =  RainbowBackGround ;
  // const Name = Register;
  const questionNum = 5;
  const [currentLife, setCurrentLife] = useState(10);
  const [currentAnswer, setCurrentAnswer] = useState(0);
  const [questionIDs, setQuestionIDs] = useState<number[]>([]);
  const [pageX, setPageX] = useState(0);
  const [pageY, setPageY] = useState(0);
  const [mistakeVisible, setMistakeVisible] = useState(false);
  const [showAnswer,setShowAnswer] = useState(false)

  const handleClickAnswer = (e: React.MouseEvent<unknown, MouseEvent>, questionID: number) => {
    if(!showAnswer){
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
      setMistakeVisible(false)
      e.stopPropagation();
    }
  };

  const handleClickContiner = (e: React.MouseEvent<unknown, MouseEvent>) => {
    if(!showAnswer){
      setPageX(e.pageX);
    setPageY(e.pageY);
    setMistakeVisible(true);
    setCurrentLife(currentLife - 1);
    }

  };

  const handleMouseDownMistake=()=>{
    if(!showAnswer){
      setMistakeVisible(false)
    }
  }
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

      {(mistakeVisible===true && showAnswer===false)&& (
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