import { Card, Grid, Spacer, Textarea,Text } from "@nextui-org/react";
import React from "react";

export const Search = () => {
  return (
    <Grid.Container direction="column" css={{position:"fixed"}}>
      <Grid>
        <Textarea placeholder={"キーワード検索"} css={{ margin: "10px  0" }} minRows={1} />
      </Grid>
      <Grid>
        <Card variant="flat" css={{mw:"175px"}}>
          <Card.Body >
            <Text h6>いまどうしてる？</Text>
            <Text h6 color="primary">#Designer</Text>
            <Text h6 color="primary">#UI/UX</Text>
          </Card.Body>
        </Card>
      </Grid>
    </Grid.Container>
  );
};
