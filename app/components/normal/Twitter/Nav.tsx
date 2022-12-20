import { Badge, Grid } from "@nextui-org/react";
import React from "react";
import { Icon } from "../../commons/Icon";
import "boxicons";

export const Nav = () => {
  return (
    <Grid.Container justify="center" direction="column" gap={1}>
      <Grid>
        <Badge color={"primary"} variant={"dot"} content={""}>
          <Icon src={"/icons/home.svg"} width={40} height={40} alt={"home"} />
        </Badge>
      </Grid>
      <Grid>
      </Grid>
      <Grid>
        <Icon src={"/icons/home.svg"} width={40} height={40} alt={"home"} />
      </Grid>
      <Grid>
        <Icon src={"/icons/home.svg"} width={40} height={40} alt={"home"} />
      </Grid>
      <Grid>
        <Icon src={"/icons/home.svg"} width={40} height={40} alt={"home"} />
      </Grid>
      <Grid>
        <Icon src={"/icons/home.svg"} width={40} height={40} alt={"home"} />
      </Grid>
      <Grid>
        <Icon src={"/icons/home.svg"} width={40} height={40} alt={"home"} />
      </Grid>
    </Grid.Container>
  );
};
