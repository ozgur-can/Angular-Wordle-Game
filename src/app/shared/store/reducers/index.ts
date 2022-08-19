import { createReducer, on } from '@ngrx/store';
import { movePointer, setLetter } from '../actions';
import { IPointer, IState } from '../interfaces';

export const wordleGrid = ['', '', '', '', ''];
const pointer = { row: 0, col: 0 };
const MAX_ROW = 5;
const MAX_COL = 5;

export const wordleGridReducer = createReducer<IState>(
  {
    wordle: wordleGrid,
    pointer,
  },
  on(setLetter, (state, { row, col }) => {
    return state;
  }),
  on(movePointer, (state, { row, col }) => {
    if (row < MAX_ROW && col < MAX_COL) {
      const pointer: IPointer = { row, col };
      return { ...state, pointer };
    }
    return state;
  })
  // on(removeLetter, (state) => state)
);
