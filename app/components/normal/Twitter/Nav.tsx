import { Avatar, Badge, Grid, Spacer } from "@nextui-org/react";
import React from "react";
import { Icon } from "../../commons/Icon";

export const Nav = () => {
  return (
    <Grid.Container justify="center" direction="column" gap={1} css={{position:"fixed"}}>
      <Grid>
        <Badge color={"primary"} variant={"dot"} content={""}>
          <Icon src={"/icons/home.svg"} width={40} height={40} alt={"home"} />
        </Badge>
      </Grid>
      <Grid>
        <Icon src={"/icons/hash.svg"} width={40} height={40} alt={"home"} />
      </Grid>
      <Grid>
        <Icon src={"/icons/bell.svg"} width={40} height={40} alt={"home"} />
      </Grid>
      <Grid>
        <Icon src={"/icons/dm.svg"} width={40} height={40} alt={"home"} />
      </Grid>
      <Grid>
        <Icon src={"/icons/tweet.svg"} width={40} height={40} alt={"home"} />
      </Grid>
      <Spacer y={10}/>
      <Grid>
        <Avatar/>
      </Grid>
    </Grid.Container>
  );
};
