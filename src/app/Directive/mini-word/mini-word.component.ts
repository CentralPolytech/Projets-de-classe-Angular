import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mini-word',
  templateUrl: './mini-word.component.html',
  styleUrls: ['./mini-word.component.css']
})
export class MiniWordComponent implements OnInit {
  color = 'red';
  fontsi = 50;
  fontfa = 'arial';
  ali = 'center';
  constructor() { }

  ngOnInit(): void {
  }
  aligner(a:string) {
    this.ali=a;
  }

}
