import { Grid } from "@nextui-org/react";
import React from "react";
import { Nav } from "./Nav";
import { Timeline } from "./Timeline";

export const Twitter = () => {
  return (
    <Grid.Container>
        <Grid>
            <Nav />
        </Grid>
        <Grid>
            <Timeline />
        </Grid>
    </Grid.Container>
  );
};
