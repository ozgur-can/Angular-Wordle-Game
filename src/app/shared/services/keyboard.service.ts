import { Injectable } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class KeyboardService {
  private keyUpEvent?: Observable<string> = undefined;

  constructor() {
    this.keyUpEvent = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
      map((event: KeyboardEvent) => event.key)
    );
  }

  listen() {
    return this.keyUpEvent;
  }
}
