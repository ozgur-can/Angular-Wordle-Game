import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { KeyboardService } from 'src/app/shared/services/keyboard.service';
import { IState } from 'src/app/shared/store/reducers';

@Component({
  selector: 'app-letter-grid',
  templateUrl: './letter-grid.component.html',
  styleUrls: ['./letter-grid.component.scss'],
})
export class LetterGridComponent implements OnInit {
  countTest$?: Observable<number> = undefined;
  wordle$?: Observable<string[]> = undefined;
  wordleLetters: string[] = [];

  constructor(private keyboardService: KeyboardService, private store: Store<IState>) {}

  ngOnInit(): void {
    this.wordle$ = this.store.pipe(select('wordle'));
    // set letters;
    this.wordle$.subscribe((data) => {
      this.wordleLetters = [...data];
    });

    // # 1 add letter to grid (basic)
    this.keyboardService.listen()!.subscribe((key) => {
      this.wordleLetters[0] = this.wordleLetters[0].concat(key.toUpperCase())
    });
  }
}
