import RainbowBackGround from "../components/easy/RainbowBackGround";
import { Register } from "../components/easy/Register";
import { Twitter } from "../components/normal/Twitter";
import { Game } from "../types";
import { Question, Questions } from "../types/question";

type Games = {
  [key: string]: (value: Game) => JSX.Element;
};

const games: Games = {
  twitter: Twitter,
  accountRegister: Register,
  gourmetBlog: RainbowBackGround,
};

const questions: Questions = require("../data/dummy.json");

export const useConvertStage = (stageId: number) => {
  const question = questions[stageId];
  const Component = games[question.name];
  return { Component, questionNum: question.questionNum };
};
