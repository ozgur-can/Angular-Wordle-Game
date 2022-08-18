import { createReducer, on } from '@ngrx/store';
import { setLetter } from '../actions';

export const wordleGridState = ['ÖZGÜR', '', '', '', ''];

export interface IState {
  wordle: string[];
}

export const wordleGridReducer = createReducer(
  wordleGridState,
  on(setLetter, (state, { row, col }) => {
    return state;
  })
  // on(removeLetter, (state) => state)
);
