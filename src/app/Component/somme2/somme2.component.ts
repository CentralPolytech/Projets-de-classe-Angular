import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-somme2',
  templateUrl: './somme2.component.html',
  styleUrls: ['./somme2.component.css']
})
export class Somme2Component implements OnInit {
@Input() x = 0;
@Input() y = 0;
z = 0;
  constructor() { }

  ngOnInit(): void {
    this.som2();
  }
som2(){this.z=this.x+this.y;}
}
