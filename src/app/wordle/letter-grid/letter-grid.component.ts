import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { KeyboardService } from 'src/app/shared/services/keyboard.service';
import {
  movePointer,
  removeLetter,
  setLetter,
} from 'src/app/shared/store/actions';
import { IPointer, IState } from 'src/app/shared/store/interfaces';

@Component({
  selector: 'app-letter-grid',
  templateUrl: './letter-grid.component.html',
  styleUrls: ['./letter-grid.component.scss'],
})
export class LetterGridComponent implements OnInit {
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

      const isEnter = this.keyboardService.isEnterPressed(key!);
      const isBackspace = this.keyboardService.isBackspacePressed(key!);

      // set letter
      if (!isEnter && !isBackspace) {
        this.store.dispatch(
          setLetter(this.pointer!.row, this.pointer!.col, key)
        );
        this.store.dispatch(
          movePointer(this.pointer!.row, this.pointer!.col + 1)
        );
      }
      // enter pressed -> change row
      else if (isEnter) {
        this.store.dispatch(movePointer(this.pointer!.row + 1, 0));
      }
      // TODO: fix
      // backspace pressed
      else if (isBackspace) {
        this.store.dispatch(removeLetter());
        this.store.dispatch(
          movePointer(this.pointer!.row, this.pointer!.col - 1)
        );
      }
    });
  }
}
