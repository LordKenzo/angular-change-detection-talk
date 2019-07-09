import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Componente1Component } from './components/component1.component';
import { Dashboard1Component } from './dashboard1.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild([{
    path: '', component: Dashboard1Component
  }])],
  declarations: [Dashboard1Component, Componente1Component],
  
})
export class Modulo1Module {}