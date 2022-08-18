import { Component, OnInit } from '@angular/core';
import { KeyService } from 'src/app/shared/services/key.service';

@Component({
  selector: 'app-letter-grid',
  templateUrl: './letter-grid.component.html',
  styleUrls: ['./letter-grid.component.scss'],
})
export class LetterGridComponent implements OnInit {
  constructor(private keyService: KeyService) {}

  ngOnInit(): void {
    this.keyService.listen();
  }
}
