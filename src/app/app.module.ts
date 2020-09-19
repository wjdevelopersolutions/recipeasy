import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchsComponent } from './header/searchs/searchs.component';
import { SearchItemComponent } from './header/searchs/search-item/search-item.component';
import { SearchbarPipe } from './header/searchs/searchs.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchsComponent,
    SearchItemComponent,
    SearchbarPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
