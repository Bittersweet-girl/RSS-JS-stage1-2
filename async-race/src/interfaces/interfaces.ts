interface ICar {
  id: number;
  name: string;
  color: string;
}
interface IWinner {
  id: number;
  time: number;
  wins: number;
}
interface IState {
  id?: number;
  end?: boolean;
  distance?: number;
  stopped?: boolean;
}
interface IEngine {
  velocity?: number;
  distance?: number;
}
interface IDrive {
  success?: string;
  id?: number;
  animationTime?: number;
}
export { ICar, IWinner, IState, IEngine, IDrive };
