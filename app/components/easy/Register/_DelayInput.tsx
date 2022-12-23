import { FormElement, Input, useInput } from "@nextui-org/react";
import React, { ChangeEvent, useEffect, useState } from "react";

type Props = {
  labelPlaceholder: string;
  underlined?: boolean;
  clearable?: boolean;
};

export const DelayInput = ({ clearable, underlined, labelPlaceholder }: Props) => {
  const { value, setValue, bindings } = useInput("");
  const [inputStack, setInputStack] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<FormElement>) => {
    console.log(e.target.value);
    setValue("");
  };

  // useEffect(() => {
  //   console.log(value);
  //   setValue("");
  // }, [value]);
  return (
    <Input
      clearable={clearable}
      underlined={underlined}
      labelPlaceholder={labelPlaceholder}
      {...bindings}
      value={value}
    />
    // <input type="text" onChange={handleChange} value={value}></input>
  );
};
