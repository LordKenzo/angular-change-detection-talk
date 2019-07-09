import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-component1',
  template: `
  <p>{{changeName()}}{{name}}</p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Componente1Component{
  @Input() name;
  changeName() {
    console.log('change...');
  }
}