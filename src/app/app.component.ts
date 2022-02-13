import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ClassProject';
  couleur = 'blue';
  ngOnInit(): void {
  }
  changecolor1() {this.couleur = 'red';}
  changecolor2() {this.couleur = 'blue';}
}
