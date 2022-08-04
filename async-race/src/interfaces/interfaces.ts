export interface ICar {
  id: number;
  name: string;
  color: string;
}
export interface IWinner {
  id: string;
  wins: number;
  time: number;
  car: ICar;
}
