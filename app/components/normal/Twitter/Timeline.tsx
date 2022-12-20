import { Avatar, Button, Card, Grid, Spacer, Text, Textarea, User } from "@nextui-org/react";
import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { Icon } from "../../commons/Icon";

type TweetList = {
  tweetInfo: { text: string; time: string }[];
};
type TweetForm = {
  setTweetInfo: Dispatch<SetStateAction<{ text: string; time: string }[]>>;
};
type Tweet = {
  time: string;
  text: string | null;
};

export const Timeline = () => {
  const [tweetInfo, setTweetInfo] = useState([
    {
      text: "Hello",
      time: "21時間",
    },
    {
      text: "Hello",
      time: "19時間",
    },
    {
      text: "Hello",
      time: "10時間",
    },
  ]);
  return (
    <Grid.Container direction="column">
      <Grid>
        <Card variant="bordered" css={{ borderRadius: "0px" }}>
          <Card.Body>
            <TweetForm setTweetInfo={setTweetInfo} />
          </Card.Body>
        </Card>
        <TweetList tweetInfo={tweetInfo} />
      </Grid>
    </Grid.Container>
  );
};

const TweetForm = ({ setTweetInfo }: TweetForm) => {
  const [error, setError] = useState("");
  const [text, setText] = useState("いまどうしてる？");
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
            <Textarea
              value={text}
              width="700px"
              labelPlaceholder={error ? error : ""}
              status={error ? "error" : "default"}
              onChange={(e) => setText(e.currentTarget.value)}
            />
          </Grid>
        </Grid.Container>
      </Grid>
      <Grid>
        <Grid.Container gap={0.5}>
          <Spacer x={28.3} />
          <Grid>
            <Icon src="/icons/addimage.svg" width={30} height={30} alt="写真を追加する" />
          </Grid>
          <Spacer />
          <Grid>
            <Button
              auto
              onPress={() => {
                if (text) {
                  setTweetInfo((before) => [...before, { text: text, time: "今" }]);
                  setError("");
                  setText("");
                } else {
                  setError("入力してください");
                }
              }}
            >
              つぶやく
            </Button>
          </Grid>
        </Grid.Container>
      </Grid>
    </Grid.Container>
  );
};

const TweetList = ({ tweetInfo }: TweetList) => {
  return (
    <Grid.Container direction="column">
      {tweetInfo.map((value: { text: string; time: string }, index: number) => {
        return (
          <Grid key={index}>
            <Card variant="bordered" css={{ borderRadius: "0px" }}>
              <Card.Body>
                <Tweet time={value.time} text={value.text} />
              </Card.Body>
            </Card>
          </Grid>
        );
      })}
    </Grid.Container>
  );
};

const Tweet = ({ time, text }: Tweet) => {
  return (
    <Grid.Container direction="column">
      <Grid>
        <User name={"No name"} description={`@UI/UX_designer・${time}`} />
      </Grid>
      <Grid css={{ marginLeft: "65px" }}>
        <Text>{text}</Text>
      </Grid>
    </Grid.Container>
  );
};
