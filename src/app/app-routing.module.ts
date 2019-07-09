import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: 'modulo1',
  loadChildren: () => import('./modulo1/modulo1.module')
  .then(m => m.Modulo1Module)
}, {
  path: 'modulo2',
  loadChildren: () => import('./modulo2/modulo2.module')
  .then(m => m.Modulo2Module)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}