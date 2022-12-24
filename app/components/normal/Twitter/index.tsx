import { Container, Grid, Spacer } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { Nav } from "./Nav";
import { Timeline } from "./Timeline";
import { Search } from "./Search";
import { GameNav } from "../../commons/GameNav";
import { Game } from "../../../types";
import { useAuth } from "../../../hooks/auth/useAuth";
export const Twitter = ({
  currentLife,
  currentAnswer,
  handleClickAnswer,
  questionNum,
  setShowAnswer,
  showAnswer,
}: Game) => {
  const { user, isLoading } = useAuth();

  return (
    <>
      <GameNav
        questionNum={questionNum}
        currentLife={currentLife}
        currentAnswer={currentAnswer}
        setShowAnswer={setShowAnswer}
        showAnswer={showAnswer}
      />
      <Grid.Container>
        <Spacer x={3} />
        <Grid>
          <Nav handleClickAnswer={handleClickAnswer} showAnswer={showAnswer} user={user} />
        </Grid>
        <Spacer x={4} />
        <Grid>
          <Timeline handleClickAnswer={handleClickAnswer} showAnswer={showAnswer} user={user} />
        </Grid>
        <Spacer x={2.8} />
        <Grid>
          <Search handleClickAnswer={handleClickAnswer} showAnswer={showAnswer} />
        </Grid>
      </Grid.Container>
    </>
  );
};
