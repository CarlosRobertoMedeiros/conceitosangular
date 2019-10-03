import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CidadeService } from './cidade.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule //Esse Serviço deve ser injetado
  ],
  providers: [
    CidadeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
