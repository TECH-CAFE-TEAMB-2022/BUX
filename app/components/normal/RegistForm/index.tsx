import { Grid, Input, useInput, Text, Button } from "@nextui-org/react";
import { useMemo } from "react";
import { Box } from "../../commons/Box";

const RegistForm = () => {
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

        <Grid xs={4}>
          <Input label="電話番号" readOnly value="090" />
        </Grid>
        <Grid xs={4}>
          <Input label="　" readOnly value="1234" />
        </Grid>
        <Grid xs={4}>
          <Input label="　" readOnly value="5678" />
        </Grid>

        <Grid xs={12}>
          <Input label="パスワード" type="password" readOnly value="Pa$$w0rd" fullWidth />
        </Grid>
        <Grid xs={12}>
          <Input label="もう一度パスワードを入力してください" readOnly value="Pa$$w0rd" fullWidth />
        </Grid>

        <Grid xs={12}>
          <Text h6 color="error">
            不正な入力欄が一つあります
          </Text>
        </Grid>

        <Grid xs={4}>
          <Button color="primary" animated={false} isFocusVisible={false}>
            送信
          </Button>
        </Grid>
        <Grid xs={4}>
          <Button color="primary" animated={false} isFocusVisible={false}>
            キャンセル
          </Button>
        </Grid>
      </Grid.Container>
    </Box>
  );
};
export default RegistForm;
