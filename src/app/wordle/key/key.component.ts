import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-key',
  templateUrl: './key.component.html',
  styleUrls: ['./key.component.scss'],
})
export class KeyComponent implements OnInit {
  @Input() key = '';
  @Output() onKeyClickEvent = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  onKeyClick() {
    this.onKeyClickEvent.emit(this.key);
  }
}
