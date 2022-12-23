import { Card, Grid, Spacer, Textarea, Text, Popover } from "@nextui-org/react";
import React, { useState } from "react";
import { AnswerPop } from "../../commons/AnswerPop";
import { Icon } from "../../commons/Icon";

type Search = {
  handleClickAnswer: (e: React.MouseEvent<unknown, MouseEvent>, props: number) => void;
  showAnswer: boolean;
};
export const Search = ({ handleClickAnswer, showAnswer }: Search) => {
  const handleClickTextarea = (e: React.MouseEvent<unknown, MouseEvent>, text: string) => {
    if (text.match(/\r\n|\r|\n/g)) {
      handleClickAnswer(e, 5);
      setAnswerFlg(true);
    }
    e.stopPropagation();
  };
  const [answerFlg, setAnswerFlg] = useState(false);
  return (
    <Grid.Container direction="column" css={{ position: "fixed" }}>
      <Grid>
        <Popover placement="left" isDismissable={false} isOpen={showAnswer ? true : undefined}>
          <Popover.Trigger>
            <Textarea
              placeholder={"キーワード検索"}
              css={{ margin: "10px  0" }}
              minRows={1}
              onClick={(e) => handleClickTextarea(e, e.currentTarget.value)}
            />
          </Popover.Trigger>
          {(answerFlg || showAnswer) && <AnswerPop showAnswer={showAnswer} />}
        </Popover>
      </Grid>
      <Grid>
        <Card variant="flat" css={{ mw: "175px" }}>
          <Card.Body>
            <Text h6>いまどうしてる？</Text>
            <Text h6 color="primary">
              #Designer
            </Text>
            <Text h6 color="primary">
              #UI/UX
            </Text>
          </Card.Body>
        </Card>
      </Grid>
    </Grid.Container>
  );
};