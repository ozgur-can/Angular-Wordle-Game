import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  movePointer,
  removeLetter,
  setLetter,
} from 'src/app/shared/store/actions';
import { IPointer, IState } from 'src/app/shared/store/interfaces';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss'],
})
export class KeyboardComponent implements OnInit {
  state$?: Observable<IState> = undefined;
  wordleLetters: string[] = [];
  pointer?: IPointer = undefined;

  constructor(private store: Store<{ game: IState }>) {}

  ngOnInit(): void {
    this.state$ = this.store.select('game');
    // get letters;
    this.state$.subscribe((state) => {
      this.wordleLetters = [...state.wordle];
      this.pointer = state.pointer;
    });
  }

  onKeyPressed(letter: string) {
    if (letter === 'Enter') {
      this.store.dispatch(movePointer(this.pointer!.row + 1, 0));
    }
    // TODO: fix
    else if (letter === 'Backspace') {
      this.store.dispatch(removeLetter());
      this.store.dispatch(
        movePointer(this.pointer!.row, this.pointer!.col - 1)
      );
    } else {
      this.store.dispatch(
        setLetter(this.pointer!.row, this.pointer!.col, letter)
      );
      this.store.dispatch(
        movePointer(this.pointer!.row, this.pointer!.col + 1)
      );
    }
  }
}
