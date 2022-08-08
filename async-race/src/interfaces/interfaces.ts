interface ICar {
  id: number;
  name: string;
  color: string;
}
interface IWinner {
  id: number;
  wins: number;
  time: number;
  car: ICar;
}
interface IState {
  id?: number;
  end?: boolean;
  distance?: number;
  stopped?: boolean;
}
interface IEngine {
  velocity?: number,
  distance?: number,
}
export { ICar, IWinner, IState, IEngine };
