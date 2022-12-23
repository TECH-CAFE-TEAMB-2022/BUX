import { Input, Radio, Spacer } from "@nextui-org/react";
import { DelayInput } from "./_DelayInput";

export const RegisterBody = (): JSX.Element => {
  return (
    <>
      <Spacer y={2.5} />
      <DelayInput clearable underlined labelPlaceholder="名前" />
      <Spacer y={1.5} />
      <Radio.Group label="性別" defaultValue="1" css={{ fontSize: "$sm" }} orientation="horizontal">
        <Radio value="1" size="xs">
          男性
        </Radio>
        <Radio value="2" size="xs">
          女性
        </Radio>
      </Radio.Group>
      <Spacer y={2.5} />
      <Input type={"email"} clearable underlined labelPlaceholder="メールアドレス" />
      <Spacer y={2.5} />
      <Input.Password clearable underlined labelPlaceholder="パスワード" />
      <Spacer y={2.5} />
      <Input.Password hideToggle clearable underlined labelPlaceholder="パスワード（確認）" />
    </>
  );
};
