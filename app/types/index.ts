import { Dispatch, SetStateAction } from "react";

export type User = {
  name: string | undefined;
  email: string | undefined;
  uid: string;
  imagePath: string | undefined;
};
export type Account = {
  email: string;
  name: string;
  password: string;
  passwordForConfirmation: string;
};

export type Game = {
  handleClickAnswer: (e: React.MouseEvent<unknown, MouseEvent>, value: number) => void;
  currentLife: number;
  currentAnswer: number;
  questionNum: number;
  setShowAnswer: Dispatch<SetStateAction<boolean>>;
  showAnswer: boolean;
};

export type NeedAnswer = {
  handleClickAnswer: (e: React.MouseEvent<unknown, MouseEvent>, props: number) => void;
  showAnswer: boolean;
};
