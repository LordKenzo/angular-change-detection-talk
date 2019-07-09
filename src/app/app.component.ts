import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  label;
  items: { label: string, value: number}[] = [{label: 'asd', value: 1}];
  
  add() {
    const value = Math.floor(Math.random() * 10) + 1;
    // this.items.push({label: this.label, value}); // La Change Detection non lo rileva
    this.items = JSON.parse(JSON.stringify(this.items)); // NON FARE!!
    this.items = [...this.items, {label: this.label, value}]
  }

}
