import { Avatar, Button, Card, Grid, Spacer, Text, Textarea, User } from "@nextui-org/react";
import React from "react";
import { Icon } from "../../commons/Icon";

export const Timeline = () => {
  return (
    <Grid.Container direction="column" >
      <Grid>
        <Card variant="bordered">
          <Card.Body>
            <TweetForm />
          </Card.Body>
        </Card>
        <Card variant="bordered">
          <Card.Body>
            <TweetList />
          </Card.Body>
        </Card>
        <Card variant="bordered">
          <Card.Body>
            <TweetList />
          </Card.Body>
        </Card>
        <Card variant="bordered">
          <Card.Body>
            <TweetList />
          </Card.Body>
        </Card>
      </Grid>
    </Grid.Container>
  );
};

const TweetForm = () => {
  return (
    <Grid.Container direction="column" gap={2}>
      <Grid>
        <Text h3>ホーム</Text>
      </Grid>
      <Grid>
        <Grid.Container gap={1}>
          <Grid>
            <Avatar />
          </Grid>
          <Grid>
            <Textarea placeholder="いまどうしてる？" width="700px" />
          </Grid>
        </Grid.Container>
      </Grid>
      <Grid>
        <Grid.Container gap={0.5}>
          <Spacer x={28.3}/>
          <Grid>
            <Icon src="/icons/addimage.svg" width={30} height={30} alt="写真を追加する" />
          </Grid>
          <Spacer />
          <Grid>
            <Button auto>つぶやく</Button>
          </Grid>
        </Grid.Container>
      </Grid>
    </Grid.Container>
  );
};

const TweetList = () => {
  return (
    <Grid.Container direction="column">
      <Tweet />
    </Grid.Container>
  );
};

const Tweet = () => {
  return (
    <Grid.Container direction="column">
      <Grid>
        <User name={"No name"} description={"@UI/UX_designer・21時間"} />
      </Grid>
      <Grid css={{ marginLeft: "65px" }}>
        <Text>Hello</Text>
      </Grid>
    </Grid.Container>
  );
};
