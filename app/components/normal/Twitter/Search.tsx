import { Card, Grid, Spacer, Textarea, Text, Popover } from "@nextui-org/react";
import React, { useState } from "react";
import { Icon } from "../../commons/Icon";

type Search = {
  handleClickAnswer: (e: React.MouseEvent<unknown, MouseEvent>, props: number) => void;
};
export const Search = ({ handleClickAnswer }: Search) => {
  const handleClickTextarea = (e: React.MouseEvent<unknown, MouseEvent>, text: string) => {
    if (text.match(/\r\n|\r|\n/g)) {
      handleClickAnswer(e, 5);
      setAnswerFlg(true)
    }
    e.stopPropagation();
  };
  const [answerFlg, setAnswerFlg] = useState(false);

  return (
    <Grid.Container direction="column" css={{ position: "fixed" }}>
      <Grid>
        <Popover placement="left" isDismissable={false}>
          <Popover.Trigger>
            <Textarea
              placeholder={"キーワード検索"}
              css={{ margin: "10px  0" }}
              minRows={1}
              onClick={(e) => handleClickTextarea(e, e.currentTarget.value)}
            />
          </Popover.Trigger>
          {answerFlg && (
            <Popover.Content>
              <Icon src="/icons/answerCircle.svg" width={50} height={50} alt="正解の丸" />
            </Popover.Content>
          )}
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
