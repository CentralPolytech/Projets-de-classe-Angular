import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-somme',
  templateUrl: './somme.component.html',
  styleUrls: ['./somme.component.css']
})
export class SommeComponent implements OnInit {
x = 0;
y = 0;
z = 0;
  constructor() { }

  ngOnInit(): void {
  }
 som(x: string, y: string) {
   this.z= +x + +y;
 }
}
