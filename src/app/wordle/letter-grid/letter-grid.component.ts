import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { KeyboardService } from 'src/app/shared/services/keyboard.service';
import { movePointer } from 'src/app/shared/store/actions';
import { IPointer, IState } from 'src/app/shared/store/interfaces';

@Component({
  selector: 'app-letter-grid',
  templateUrl: './letter-grid.component.html',
  styleUrls: ['./letter-grid.component.scss'],
})
export class LetterGridComponent implements OnInit {
  countTest$?: Observable<number> = undefined;
  state$?: Observable<IState> = undefined;
  wordleLetters: string[] = [];
  pointer?: IPointer = undefined;

  constructor(
    private keyboardService: KeyboardService,
    private store: Store<{ game: IState }>
  ) {}

  ngOnInit(): void {
    this.state$ = this.store.select('game');
    // get letters;
    this.state$.subscribe((state) => {
      this.wordleLetters = [...state.wordle];
      this.pointer = state.pointer;
    });

    // keyboardservice for key listening & setting values to wordle grid
    this.keyboardService.listen()!.subscribe((key) => {
      if (!key) return;

      // set letter
      if (!this.keyboardService.isEnterPressed(key!)) {
        this.wordleLetters[this.pointer!.row] = this.wordleLetters[
          this.pointer!.row
        ].concat(key!.toUpperCase());
      } else {
        // change row
        this.store.dispatch(movePointer(this.pointer!.row + 1, 0));
      }
    });
  }
}
