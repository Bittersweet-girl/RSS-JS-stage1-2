export interface ICar {
  id: number;
  name: string;
  color: string;
}
export interface IWinner {
  id: number;
  wins: number;
  time: number;
  car: ICar;
}
