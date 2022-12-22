import { Avatar, Badge, Grid, Popover, Spacer } from "@nextui-org/react";
import React, { useState } from "react";
import { Icon } from "../../commons/Icon";

type Nav = {
  handleClickAnswer: (e: React.MouseEvent<unknown, MouseEvent>, props: number) => void;
};

export const Nav = ({ handleClickAnswer }: Nav) => {
  const [flg, setFlg] = useState(false);
  return (
    <Grid.Container
      justify="center"
      direction="column"
      gap={1}
      css={{ position: "fixed", width: "100px", zIndex: "$3" }}
    >
      <Popover placement="left" isDismissable={false}>
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
        <Popover.Content>
          <Icon src="/icons/answerCircle.svg" width={50} height={50} alt="正解の丸" />
        </Popover.Content>
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
      <Popover placement="left" isDismissable={false}>
        <Popover.Trigger>
          <Grid onClick={(e) => handleClickAnswer(e, 2)}>
            <Icon src={"/icons/tweet.svg"} width={40} height={40} alt={"home"} />
          </Grid>
        </Popover.Trigger>
        <Popover.Content>
          <Icon src="/icons/answerCircle.svg" width={50} height={50} alt="正解の丸" />
        </Popover.Content>
      </Popover>
      <Spacer y={10} />
      <Grid>
        <Avatar />
      </Grid>
    </Grid.Container>
  );
};
