import { Input, Popover, Radio, Spacer, } from "@nextui-org/react";
import { Account, NeedAnswer } from "../../../types";
import { AnswerPop } from "../../commons/AnswerPop";
import { DelayInput } from "./_DelayInput";

type Props = {
  formValue?: Account;
} & NeedAnswer;

export const RegisterBody = ({ formValue, handleClickAnswer, showAnswer }: Props): JSX.Element => {
  const handleClickInput = (e: React.MouseEvent<unknown, MouseEvent>) => {
      handleClickAnswer(e, 2);
    e.stopPropagation();
  };
  return (
    <>
      <Spacer y={2.5} />
      <Input clearable underlined labelPlaceholder="名前" value={formValue?.name} />
      <Spacer y={1.5} />
      <Popover placement="left" isDismissable={false} isOpen={showAnswer ? true : undefined}>
        <Popover.Trigger>
          <div onClick={(e) =>{handleClickAnswer(e, 1)}}>
          <Radio.Group
            label="性別"
            defaultValue="1"
            css={{ fontSize: "$sm" }}
            orientation="horizontal"
          >
            <Radio value="1" size="xs">
              男性
            </Radio>
            <Radio value="2" size="xs">
              女性
            </Radio>
          </Radio.Group>
          </div>
        </Popover.Trigger>
        <AnswerPop showAnswer={showAnswer} />
      </Popover>

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
      <Popover placement="left" isDismissable={false} isOpen={showAnswer ? true : undefined}>
        <Popover.Trigger>
        <Input.Password
        hideToggle
        clearable
        underlined
        labelPlaceholder="パスワード（確認）"
        value={formValue?.passwordForConfirmation}
        onClick={(e)=>handleClickInput(e)}
      />
        </Popover.Trigger>
        <AnswerPop showAnswer={showAnswer}/>
      </Popover>
    </>
  );
};
