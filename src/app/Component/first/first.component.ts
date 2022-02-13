import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor() { }
    name = "Beat de l'image:  ";
    compteur = 1;
    ishidden = true;
  ngOnInit(): void {
    setInterval(() => {this.compteur++;},1000);
    setInterval(() => {this.ishidden = !this.ishidden;},1000);
  }
}
