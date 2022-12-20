/**
 * コンポーネント表示の条件分岐
 */
import React from "react";
import { Twitter } from "../components/normal/Twitter/index";

type Props = {
  level: string;
  id: number;
};
export const Stages = ({ level, id }: Props) => {
  const Name = Twitter;
  return <Name />;
};
