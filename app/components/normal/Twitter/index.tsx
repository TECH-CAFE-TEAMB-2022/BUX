import { Grid, Spacer } from "@nextui-org/react";
import React from "react";
import { Nav } from "./Nav";
import { Timeline } from "./Timeline";
import { Search } from "./Search";
import { GameNav } from "../../commons/GameNav";

export const Twitter = () => {
  return (
    <>
      <GameNav />
      <Grid.Container>
        <Spacer x={3} />
        <Grid>
          <Nav />
        </Grid>
        <Spacer x={4} />
        <Grid>
          <Timeline />
        </Grid>
        <Spacer x={2.8} />
        <Grid>
          <Search />
        </Grid>
      </Grid.Container>
    </>
  );
};
