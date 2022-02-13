import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
name = 0;
  constructor() { }

  ngOnInit(): void {
  }
  changename() {this.name+=1;}
}
