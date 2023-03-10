import RainbowBackGround from "../components/easy/RainbowBackGround";
import { Register } from "../components/easy/Register";
import RegistForm from "../components/normal/RegistForm";
import { Twitter } from "../components/normal/Twitter";
import { Game } from "../types";
import { Question, Questions } from "../types/question";

type Games = {
  [key: string]: (value: Game) => JSX.Element | null;
};

const Games: Games = {
  twitter: Twitter,
  accountRegister: Register,
  gourmetBlog: RainbowBackGround,
  RegistForm:RegistForm
};

const questions: Questions = require("../data/dummy.json");

export const useConvertStage = (stageId: number) => {
  const question = questions[stageId];
  const Component = Games[question?.name];

  return { Component, ...question };
};
