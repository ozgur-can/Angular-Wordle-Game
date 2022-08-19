import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hide',
})
export class HideEmptyLetterPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]) {
    if (value === '-') {
      return (value = '');
    } else return value;
  }
}
