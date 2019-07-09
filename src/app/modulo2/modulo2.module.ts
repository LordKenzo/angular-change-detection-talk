import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Componente2Component } from './components/component2.component';
import { RouterModule } from '@angular/router';
import { Dashboard2Component } from './dashboard2.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild([{
    path: '', component: Dashboard2Component
  }])],
  declarations: [Dashboard2Component, Componente2Component]
})
export class Modulo2Module {}