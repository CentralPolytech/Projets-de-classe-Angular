import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './Component/first/first.component';
import { SecondComponent } from './Component/second/second.component';
import { ColorComponent } from './Component/color/color.component';
import { SommeComponent } from './Component/somme/somme.component';
import { Somme2Component } from './Component/somme2/somme2.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ColorComponent,
    SommeComponent,
    Somme2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
