export type User = {
  name: string;
  email: string;
  uid: string;
  imagePath: string;
};

export type Game = {
  handleClickAnswer: (e:React.MouseEvent<unknown, MouseEvent>,value: number) => void;
  handleClickMistake: () => void;
  currentLife: number;
  currentAnswer: number;
  questionNum: number;
};
