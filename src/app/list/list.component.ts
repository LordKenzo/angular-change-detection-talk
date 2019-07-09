import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  template: `
  
  <ul>
    <li *ngFor="let item of items">
    <!-- l'errore è nel mettere la chiamata ad un metodo nel binding, meglio usare una PIPE! -->
      {{item.label}} {{ item.value | fibonacci}} <!-- {{computeValue(item.value)}} -->
    </li>
  </ul>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent {

  @Input() items;


}