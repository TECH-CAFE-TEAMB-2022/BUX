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
      <Grid css={isHover ? { mt: 48 } : {}}>
        <Button
          bordered
          color="primary"
          auto
          onMouseMove={handleMouseMove}
          // onMouseOut={handleMouseOver}
        >
          戻る
        </Button>
      </Grid>
      <Grid>
        <Button bordered color="primary" auto onClick={onClickRegister}>
          新規登録
        </Button>
      </Grid>
      <Grid>
        <Popover>
          <Popover.Trigger>
            <Button color="primary" onClick={onClickCancel}>
              キャンセル
            </Button>
          </Popover.Trigger>
          <AnswerPop showAnswer={showAnswer} />
        </Popover>
      </Grid>
    </Grid.Container>
  );
};
