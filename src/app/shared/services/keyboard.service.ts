import { Injectable } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class KeyboardService {
  private keyUpEvent?: Observable<string | undefined> = undefined;

  constructor() {
    this.keyUpEvent = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
      map((event: KeyboardEvent) => this.filterKeys(event))
    );
  }

  listen() {
    return this.keyUpEvent;
  }

  // only between a - z
  filterKeys(event: KeyboardEvent) {
    if (
      (event.keyCode >= 65 && event.keyCode <= 90) ||
      (event.keyCode >= 188 && event.keyCode <= 221) ||
      event.key === 'Enter' || event.key === 'Backspace'
    ) {
      return event.key;
    }

    return;
  }

  isEnterPressed(key: string) {
    return key === 'Enter';
  }

  isBackspacePressed(key: string) {
    return key === 'Backspace';
  }
}
