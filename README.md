# Angular Meetup Talk

Questo repo è parte del talk di Angular Rome tenuto da Michele Aponte.

I topic toccati sono stati:

1. **Lazy Loading** con la nuova sintassi Angular 8: vedi modulo1 e modulo2
2. **Change Detection Strategy**: come ti impallo una interfaccia grazie a Fibonacci
  * Inizialmente il codice di listComponent era:
  ```
  import { Component } from '@angular/core';

  @Component({
    selector: 'app-list',
    template: `
    <input type="text" [(ngModel)]="label" (keyup.enter)="add()">
    <ul>
      <li *ngFor="let item of items">
      <!-- EVITA di mettere la chiamata ad un metodo nel binding, sfrutteremo la PIPE successivamente (funzione pura / memoizzazione) -->
        {{item.label}} {{computeValue(item.value)}} -->
      </li>
    </ul>
    `
  })
  export class ListComponent {

    label;
    items: { label: string, value: number}[] = [];
    
    add() {
      const value = Math.floor(Math.random() * 10) + 1;
      this.items.push({label: this.label, value});
    }

    computeValue(value: number) {
      console.log(value);
      return this.fibonacci(value);
    }

    public fibonacci(num: number): number {
      if(num === 1 || num === 2) {
        return 1;
      }
      return this.fibonacci(num - 1) + this.fibonacci(num -2);
    }

  }
```
  * Il passo successivo è stato quello di portare tutto in AppComponent e in ListComponent avere una proprietà @Input() e sfruttare la changeDetectionStrategy e ovviamente l'immutabilità del dato che passiamo in input (gli array sono oggetti e se non cambio la referenza la CD non viene rivelata!!!)
  * Infine ottimizziamo il tutto con le PIPE e una libreria di caching per non ricalcolare valori già calcolati precedentemente
3. Posso far comunicare i componenti con le proprietà @Input() e @Output() se ho relazioni padre-figlio o fratello-fratello sfruttando il padre. Ma prima di scomodare un pattern Redux con NgRX, sfruttando la Dependency Injection, possiamo sfruttare pattern Mediator/Broker che con un Subject aggiorna i vari sottoscrittori grazie agli operatori RxJS posso filtrare i messaggi e fare operazioni prima di inviare il dato, (oppure BehaviorSubject)
4. Usate gli **Interceptor**, se posso centralizzare delle logiche alle chiamate del backend, come gestione degli errori, inviare token, fare logging, tramite l'interceptor e il root injector, lo inietto dove mi serve ;) 
5. **Documentate il codice**, preferibilmente in Markdown!!!
6. Usare Linter ricordandovi che potete cambiare le regole a Vs. piacimento
7. Code Quality: https://www.sonarqube.org/
8. Usate il principio **KISS** e la coerenza nella scrittura del codice

See yaa @ Blexin - with Michele Aponte, thanks to Angular Roma and Codemotion
Enjoy [NG Rome Conf](https://ngrome.io) - 7th October 2019