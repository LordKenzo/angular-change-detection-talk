import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard1',
  template: `<h1>Dashboard 1</h1>
  <app-component1 [name]=name></app-component1>`
})
export class Dashboard1Component{
  name = ['Mario', 'Franco']
  constructor() {
    setTimeout(() => this.name.push('Lorenzo'), 1500);
  }

}