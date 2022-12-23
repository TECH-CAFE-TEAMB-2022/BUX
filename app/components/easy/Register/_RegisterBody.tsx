import { Input, Radio, Spacer } from "@nextui-org/react";
import { Account } from "../../../types";
import { DelayInput } from "./_DelayInput";

type Props = {
  formValue?: Account;
};

export const RegisterBody = ({ formValue }: Props): JSX.Element => {
  return (
    <>
      <Spacer y={2.5} />
      <Input clearable underlined labelPlaceholder="名前" value={formValue?.name} />
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
      <Input
        type={"email"}
        clearable
        underlined
        labelPlaceholder="メールアドレス"
        value={formValue?.email}
      />
      <Spacer y={2.5} />
      <Input.Password
        clearable
        underlined
        labelPlaceholder="パスワード"
        value={formValue?.password}
      />
      <Spacer y={2.5} />
      <Input.Password
        hideToggle
        clearable
        underlined
        labelPlaceholder="パスワード（確認）"
        value={formValue?.passwordForConfirmation}
      />
    </>
  );
};
