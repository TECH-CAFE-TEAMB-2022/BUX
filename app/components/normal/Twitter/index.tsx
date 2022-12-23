import { Container, Grid, Spacer } from "@nextui-org/react";
import React, { useState } from "react";
import { Nav } from "./Nav";
import { Timeline } from "./Timeline";
import { Search } from "./Search";
import { GameNav } from "../../commons/GameNav";
import { Game } from "../../../types";
export const Twitter = ({
  currentLife,
  currentAnswer,
  handleClickAnswer,
  questionNum,
  setShowAnswer,
  showAnswer
}: Game) => {
  return (
    <>
      <GameNav questionNum={questionNum} currentLife={currentLife} currentAnswer={currentAnswer} setShowAnswer={setShowAnswer} showAnswer={showAnswer}/>
        <Grid.Container>
          <Spacer x={3} />
          <Grid>
            <Nav handleClickAnswer={handleClickAnswer} showAnswer={showAnswer}/>
          </Grid>
          <Spacer x={4} />
          <Grid>
            <Timeline handleClickAnswer={handleClickAnswer} showAnswer={showAnswer}/>
          </Grid>
          <Spacer x={2.8} />
          <Grid>
            <Search handleClickAnswer={handleClickAnswer} showAnswer={showAnswer}/>
          </Grid>
        </Grid.Container>
    </>
  );
};