import { createAction } from '@ngrx/store';

export const setLetter = createAction('SET_LETTER', (row, col, value) => ({
  row,
  col,
  value
}));
export const removeLetter = createAction('REMOVE_LETTER');
export const movePointer = createAction('MOVE_POINTER', (row, col) => ({
  row,
  col,
}));
