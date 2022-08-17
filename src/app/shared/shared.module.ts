import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';
import { KeyboardComponent } from '../wordle/keyboard/keyboard.component';
import { LetterGridComponent } from '../wordle/letter-grid/letter-grid.component';
import { LetterComponent } from '../wordle/letter/letter.component';
import { WordleRootComponent } from '../wordle/wordle-root/wordle-root.component';

@NgModule({
  declarations: [
    HeaderComponent,
    KeyboardComponent,
    LetterGridComponent,
    WordleRootComponent,
    LetterComponent,
  ],
  imports: [CommonModule],
  exports: [
    FormsModule,
    HeaderComponent,
    KeyboardComponent,
    LetterGridComponent,
    WordleRootComponent,
    LetterComponent,
  ],
})
export class SharedModule {}
