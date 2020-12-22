import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StyleDirective } from './Directives/style.directive';
import { IfnotDirective } from './Directives/ifnot.directive';
import { MultPipe } from './pipes/mult.pipe';
import { FilterPipe } from './pipes/filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    StyleDirective,
    IfnotDirective,
    MultPipe,
    FilterPipe,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
