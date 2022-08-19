import { Component, Input, OnInit } from '@angular/core';
import { HideEmptyLetterPipe } from 'src/app/shared/pipes/hide.pipe';

@Component({
  selector: 'app-letter',
  templateUrl: './letter.component.html',
  styleUrls: ['./letter.component.scss'],
  providers: [HideEmptyLetterPipe],
})
export class LetterComponent implements OnInit {
  @Input() letter = '';
  constructor() {}

  ngOnInit(): void {}
}
