import { Card, Grid, Spacer, Textarea,Text } from "@nextui-org/react";
import React from "react";

export const Search = () => {
  return (
    <Grid.Container direction="column">
      <Grid>
        <Textarea placeholder={"キーワード検索"} css={{ margin: "10px" }} minRows={1} />
      </Grid>
      <Grid>
        <Card variant="flat">
          <Card.Body>
            <Text h6>いまどうしてる？</Text>
            <Text h6>#Designer</Text>
            <Text h6>#UI/UX</Text>
          </Card.Body>
        </Card>
      </Grid>
    </Grid.Container>
  );
};
