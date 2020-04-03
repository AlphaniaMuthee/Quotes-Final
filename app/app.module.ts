import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { EntryComponent } from './entry/entry.component';
import { HighlightDirective } from './highlight.directive';
import { DaysCountPipe } from './days-count.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    EntryComponent,
    HighlightDirective,
    DaysCountPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
