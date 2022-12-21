export type User = {
  name: string;
  email: string;
  uid: string;
  imagePath: string;
};


export type Game = {
    handleClickAnswer:(value:number)=>void
    currentLife:number
    currentAnswer:number
    questionNum:number
}