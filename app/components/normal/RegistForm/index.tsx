import { Grid, Input, useInput, Text, Button, Container, Popover } from "@nextui-org/react";
import { useMemo } from "react";
import { Game } from "../../../types";
import { AnswerPop } from "../commons/AnswerPop";
import { Box } from "../../commons/Box";
import { GameNav } from "../../commons/GameNav";

const RegistForm = ({
  currentLife,
  currentAnswer,
  handleClickAnswer,
  questionNum,
  setShowAnswer,
  showAnswer,
}: Game) => {
  return (
    <Box
      css={{
        w: "50%",
        margin: "$1 auto",
        border: "1px solid #ddd",
        borderRadius: 10,
      }}
    >
      <Grid.Container gap={4} justify="center">
        <GameNav
          questionNum={questionNum}
          currentLife={currentLife}
          currentAnswer={currentAnswer}
          setShowAnswer={setShowAnswer}
          showAnswer={showAnswer}
        />
        <Grid xs={12}>
          <Text h1 size={24}>
            アカウントを作成
          </Text>
        </Grid>
        <Grid xs={6}>
          <Input label="姓" placeholder="例. 山田" readOnly value="山田" fullWidth />
        </Grid>
        <Grid xs={6}>
          <Input label="名" placeholder="例. 太郎" readOnly value="太郎" fullWidth />
        </Grid>
        <Grid xs={12}>
          <Input type="email" label="メールアドレス" value="sample" readOnly fullWidth />
        </Grid>

        <Popover placement="left" isDismissable={false} isOpen={showAnswer ? true : undefined}>
          <Popover.Trigger>
            <Grid.Container
              justify="center"
              gap={4}
              onClick={(e) => {
                handleClickAnswer(e, 1);
              }}
            >
              <Grid xs={4}>
                <Input label="電話番号" readOnly value="090" />
              </Grid>
              <Grid xs={4}>
                <Input label="　" readOnly value="1234" />
              </Grid>
              <Grid xs={4}>
                <Input label="　" readOnly value="5678" />
              </Grid>
            </Grid.Container>
          </Popover.Trigger>
          <AnswerPop showAnswer={showAnswer} />
        </Popover>

        <Grid xs={12}>
          <Input label="パスワード" type="password" readOnly value="Pa$$w0rd" fullWidth />
        </Grid>
        <Grid xs={12}>
          <Popover placement="left" isDismissable={false} isOpen={showAnswer ? true : undefined}>
            <Popover.Trigger>
              <Input
                label="もう一度パスワードを入力してください"
                readOnly
                value="Pa$$w0rd"
                fullWidth
                onClick={(e) => {
                  handleClickAnswer(e, 2);
                }}
              />
            </Popover.Trigger>
            <AnswerPop showAnswer={showAnswer} />
          </Popover>
        </Grid>

        <Grid xs={12}>
          <Popover placement="left" isDismissable={false} isOpen={showAnswer ? true : undefined}>
            <Popover.Trigger>
              <Text
                h6
                color="error"
                onClick={(e) => {
                  handleClickAnswer(e, 3);
                }}
              >
                不正な入力欄が一つあります
              </Text>
            </Popover.Trigger>
            <AnswerPop showAnswer={showAnswer} />
          </Popover>
        </Grid>

        <Popover placement="left" isDismissable={false} isOpen={showAnswer ? true : undefined}>
          <Popover.Trigger>
            <Grid.Container
              justify="center"
              gap={4}
              onClick={(e) => {
                handleClickAnswer(e, 4);
              }}
            >
              <Grid xs={4}>
                <Button
                  color="primary"
                  animated={false}
                  isFocusVisible={false}
                  css={{ background: "#0072f5!important" }}
                  disabled
                >
                  <Text color="white">送信</Text>
                </Button>
              </Grid>
              <Grid xs={4}>
                <Button
                  color="primary"
                  animated={false}
                  isFocusVisible={false}
                  css={{ background: "#0072f5!important" }}
                  disabled
                >
                  <Text color="white">キャンセル</Text>
                </Button>
              </Grid>
            </Grid.Container>
          </Popover.Trigger>
          <AnswerPop showAnswer={showAnswer} />
        </Popover>
      </Grid.Container>
    </Box>
  );
};
export default RegistForm;
