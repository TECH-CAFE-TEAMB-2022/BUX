import { Button, Grid } from "@nextui-org/react";
import { useEffect, useState } from "react";

type Props = {
  onClickRegister?: () => void;
  onClickBack?: () => void;
  onClickCancel?: () => void;
};

export const RegisterButtonGroup = ({
  onClickRegister,
  onClickBack,
  onClickCancel,
}: Props): JSX.Element => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseMove = () => {
    setIsHover(true);
  };

  useEffect(() => {
    if (!isHover) return;
  }, [isHover]);

  //   const handleMouseOver = () => {
  //     setIsHover(false);
  //   };

  return (
    <Grid.Container justify="flex-end" gap={1}>
      <Grid css={isHover ? { mt: 48 } : {}}>
        <Button bordered color="primary" auto onClick={onClickBack} onMouseMove={handleMouseMove}>
          戻る
        </Button>
      </Grid>
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
