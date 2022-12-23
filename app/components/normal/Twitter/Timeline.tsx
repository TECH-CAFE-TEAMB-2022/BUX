import {
  Avatar,
  Button,
  Card,
  Container,
  Grid,
  Popover,
  Spacer,
  Text,
  Textarea,
  User,
} from "@nextui-org/react";
import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { Icon } from "../../commons/Icon";

type Timeline = {
  handleClickAnswer: (e: React.MouseEvent<unknown, MouseEvent>, props: number) => void;
};
type TweetList = Timeline & {
  tweetInfo: { text: string; time: string }[];
};
type TweetForm = Timeline & {
  setTweetInfo: Dispatch<SetStateAction<{ text: string; time: string }[]>>;
};
type Tweet = Timeline & {
  time: string;
  text: string | null;
};

export const Timeline = ({ handleClickAnswer }: Timeline) => {
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
        <Card variant="bordered" css={{ borderRadius: "0px", position: "relative", zIndex: "$10" }}>
          <Card.Body>
            <TweetForm setTweetInfo={setTweetInfo} handleClickAnswer={handleClickAnswer} />
          </Card.Body>
        </Card>
        <TweetList tweetInfo={tweetInfo} handleClickAnswer={handleClickAnswer} />
      </Grid>
    </Grid.Container>
  );
};

const TweetForm = ({ setTweetInfo, handleClickAnswer }: TweetForm) => {
  const [error, setError] = useState("");
  const [text, setText] = useState("いまどうしてる？");
  const [answerFlg, setAnswerFlg] = useState(false);

  const handleClickTweet = () => {
    if (text) {
      setTweetInfo((before) => [...before, { text: text, time: "今" }]);
      setError("");
      setText("いまどうしてる？");
    } else {
      setError("入力してください");
    }
  };
  const handleClickTextarea = (e: React.MouseEvent<unknown, MouseEvent>, text: string) => {
    if (!text.includes("いまどうしてる？")) {
      handleClickAnswer(e, 4);
      setAnswerFlg(true);
    }
    e.stopPropagation();
  };

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
            <Popover placement="top" isDismissable={false}>
              <Popover.Trigger >
                <Textarea
                  value={text}
                  width="700px"
                  labelPlaceholder={error ? error : ""}
                  status={error ? "error" : "default"}
                  onChange={(e) => setText(e.currentTarget.value)}
                  onClick={(e) => handleClickTextarea(e, text)}
                />
              </Popover.Trigger>
              {answerFlg && (
                <Popover.Content>
                  <Icon src="/icons/answerCircle.svg" width={50} height={50} alt="正解の丸" />
                </Popover.Content>
              )}
            </Popover>
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
            <Button auto onPress={handleClickTweet}>
              つぶやく
            </Button>
          </Grid>
        </Grid.Container>
      </Grid>
    </Grid.Container>
  );
};

const TweetList = ({ tweetInfo, handleClickAnswer }: TweetList) => {
  return (
    <Grid.Container direction="column">
      {tweetInfo.map((value: { text: string; time: string }, index: number) => {
        return (
          <Grid key={index}>
            <Card variant="bordered" css={{ borderRadius: "0px" }}>
              <Card.Body>
                <Tweet time={value.time} text={value.text} handleClickAnswer={handleClickAnswer} />
              </Card.Body>
            </Card>
          </Grid>
        );
      })}
    </Grid.Container>
  );
};

const Tweet = ({ time, text, handleClickAnswer }: Tweet) => {
  return (
    <Grid.Container direction="column">
      <Grid>
        <Popover placement="right" isDismissable={false}>
          <Popover.Trigger>
            <User
              name={"No name"}
              description={`@UI/UX_designer・${time}`}
              onClick={(e) => handleClickAnswer(e, 3)}
            />
          </Popover.Trigger>
          <Popover.Content>
            <Icon src="/icons/answerCircle.svg" width={50} height={50} alt="正解の丸" />
          </Popover.Content>
        </Popover>
      </Grid>
      <Grid css={{ marginLeft: "65px" }}>
        <Text>{text}</Text>
      </Grid>
    </Grid.Container>
  );
};
