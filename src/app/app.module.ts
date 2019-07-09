import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { FibonacciPipe } from './shared/fibonacci.pipe';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    AppRoutingModule
  ],
  declarations: [ AppComponent, ListComponent, FibonacciPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
