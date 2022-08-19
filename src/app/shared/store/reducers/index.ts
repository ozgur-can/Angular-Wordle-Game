import { createReducer, on } from '@ngrx/store';
import { movePointer, setLetter, removeLetter } from '../actions';
import { EMPTY_LETTER, MAX_COL, MAX_ROW, setCharAt } from '../helpers';
import { IPointer, IState } from '../interfaces';

export const wordleGrid = ['-----', '-----', '-----', '-----', '-----'];
const pointer = { row: 0, col: 0 };

export const wordleGridReducer = createReducer<IState>(
  {
    wordle: wordleGrid,
    pointer,
  },
  on(setLetter, (state, { row, col, value }) => {
    const wordle: string[] = [...state.wordle];

    // exit if value not empty
    if (wordle[row][col] !== EMPTY_LETTER) return state;

    // set if value empty
    wordle[row] = setCharAt(wordle[row], col, value.toUpperCase());
    return { ...state, wordle };
  }),
  on(removeLetter, (state) => {
    const wordle: string[] = [...state.wordle];

    // exit if value empty
    if (wordle[state.pointer!.row][state.pointer!.col] === EMPTY_LETTER)
      return state;

    // delete char if value is not empty
    wordle[state.pointer.row] = setCharAt(
      wordle[state.pointer.row],
      state.pointer.col,
      ''
    );
    return { ...state, wordle };
  }),
  on(movePointer, (state, { row, col }) => {
    // exit
    if (row < 0 || col < 0) return state;

    // move if pointer values less than max
    if (row < MAX_ROW && col < MAX_COL) {
      const pointer: IPointer = { row, col };
      return { ...state, pointer };
    }
    return state;
  })
);
