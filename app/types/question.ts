export type Question = {
  questionNum: number;
  name: string;
  level: "easy" | "normal" | "hard";
  displayName: string;
  imagePath: string;
};

export type Questions = {
  [key: number]: Question;
};

export type MoldQuestion = {
  id: number;
  value: Question;
};

export type MoldQuestions = MoldQuestion[];
