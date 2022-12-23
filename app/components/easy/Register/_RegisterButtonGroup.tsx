import { Button, Grid, Popover } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { NeedAnswer } from "../../../types";
import { AnswerBody } from "../../commons/AnswerBody";
import { AnswerPop } from "../../commons/AnswerPop";

type Props = {
  onClickRegister?: () => void;
  onClickCancel?: () => void;
} & NeedAnswer;

export const RegisterButtonGroup = ({
  onClickRegister,
  onClickCancel,
  handleClickAnswer,
  showAnswer,
}: Props): JSX.Element => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseMove = () => {
    setIsHover(true);
  };

  useEffect(() => {
    if (!isHover) return;
  }, [isHover]);

  return (
    <Grid.Container justify="flex-end" gap={1}>
      <Popover placement="left" isDismissable={false} isOpen={showAnswer ? true : undefined}>
          <Grid css={isHover ? { mt: 48 } : {}}>
        <Popover.Trigger>
            <Button bordered auto onMouseMove={handleMouseMove} onClick={(e)=>handleClickAnswer(e, 3)} >
              戻る
            </Button>
        </Popover.Trigger>
          </Grid>
        <AnswerPop showAnswer={showAnswer} />
      </Popover>
      <Grid>
        <Button bordered color="primary" auto onClick={onClickRegister}>
          新規登録
        </Button>
      </Grid>
      <Grid>
        <Button color="primary" onClick={onClickCancel}>
          キャンセル
        </Button>
      </Grid>
    </Grid.Container>
  );
};
