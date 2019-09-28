import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavegacaoModule } from './navegacao/navegacao.module';
import { BotoesModule } from './botoes/botoes.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NavegacaoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
