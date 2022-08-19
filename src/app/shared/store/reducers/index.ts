import { createReducer, on } from '@ngrx/store';
import { setLetter } from '../actions';
import { IState } from '../interfaces';

export const wordleGrid = ['', '', '', '', ''];
const pointer = { row: 0, col: 0 };

export const wordleGridReducer = createReducer<IState>(
  {
    wordle: wordleGrid,
    pointer,
  },
  on(setLetter, (state, { row, col }) => {
    return state;
  })
  // on(removeLetter, (state) => state)
);
