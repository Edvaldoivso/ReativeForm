import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'statusbar',
  templateUrl: './statusbar.component.html',
  styleUrls: ['./statusbar.component.scss']
})
export class StatusbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  valorbarra (num : number){
    console.log(num)
  }

}
