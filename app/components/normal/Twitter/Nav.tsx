import { Avatar, Badge, Grid, Popover, Spacer } from "@nextui-org/react";
import React, { useState } from "react";
import { User } from "../../../types";

import { AnswerPop } from "../../commons/AnswerPop";
import { Icon } from "../../commons/Icon";

type Nav = {
  handleClickAnswer: (e: React.MouseEvent<unknown, MouseEvent>, props: number) => void;
  showAnswer: boolean;
  user: User;
};

export const Nav = ({ handleClickAnswer, showAnswer, user }: Nav) => {
  return (
    <Grid.Container
      justify="center"
      direction="column"
      gap={1}
      css={{ width: "100px", zIndex: "$3" }}
    >
      <Popover placement="left" isDismissable={false} isOpen={showAnswer ? true : undefined}>
        <Popover.Trigger>
          <Grid
            onClick={(e) => {
              handleClickAnswer(e, 1);
            }}
          >
            <Badge color={"primary"} variant={"dot"} content={""}>
              <Icon src={"/icons/home.svg"} width={40} height={40} alt={"home"} />
            </Badge>
          </Grid>
        </Popover.Trigger>
        <AnswerPop showAnswer={showAnswer} />
      </Popover>
      <Grid>
        <Icon src={"/icons/hash.svg"} width={40} height={40} alt={"home"} />
      </Grid>
      <Grid>
        <Icon src={"/icons/bell.svg"} width={40} height={40} alt={"home"} />
      </Grid>
      <Grid>
        <Icon src={"/icons/dm.svg"} width={40} height={40} alt={"home"} />
      </Grid>
      <Popover placement="left" isDismissable={false} isOpen={showAnswer ? true : undefined}>
        <Popover.Trigger>
          <Grid onClick={(e) => handleClickAnswer(e, 2)}>
            <Icon src={"/icons/tweet.svg"} width={40} height={40} alt={"home"} />
          </Grid>
        </Popover.Trigger>
        <AnswerPop showAnswer={showAnswer} />
      </Popover>
      <Spacer y={10} />
      <Grid>
        <Avatar src={user.imagePath} />
      </Grid>
    </Grid.Container>
  );
};
