export interface IPointer {
  row: number;
  col: number;
}

export interface IState {
  wordle: string[];
  pointer: IPointer;
}
