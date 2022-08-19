// variables
export const MAX_ROW = 5;
export const MAX_COL = 5;
export const EMPTY_LETTER = '-';

// functions
export function setCharAt(str: string, index: number, chr: string) {
  if (index > str.length - 1) return str;
  return str.substring(0, index) + chr + str.substring(index + 1);
}
