import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './wordle/header/header.component';
import { KeyboardComponent } from './wordle/keyboard/keyboard.component';
import { LetterGridComponent } from './wordle/letter-grid/letter-grid.component';
import { WordleRootComponent } from './wordle/wordle-root/wordle-root.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    KeyboardComponent,
    LetterGridComponent,
    WordleRootComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
