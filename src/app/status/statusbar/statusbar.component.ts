import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'statusbar',
  templateUrl: './statusbar.component.html',
  styleUrls: ['./statusbar.component.scss'],
})
export class StatusbarComponent implements OnInit {
  constructor() {}

  //Recebe valor do meio externo do componente para ser usado internamente simples assim!.
  @Input() statusbarvalue: number = 0;

  ngOnInit(): void {
    this.statusbar();
  }

  ngOnChanges(): void {
    this.statusbar();
  }

  statusbar() {
    let statusbar: any = document.querySelector('.fully');
    statusbar.style.width = this.statusbarvalue + '%';
  }
}
