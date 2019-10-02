import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { LogService } from './log.service';
import { FuncionarioModule } from './funcionario/funcionario.module';



/*const criarFuncionarioService = () =>{
  return new FuncionarioAbreviadoService(4); //Instancio por fábrica com 4 Caracteres ao iniciar o nome
}*/

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FuncionarioModule
  ],
  providers: [
    //FuncionarioService
    //{ provide: FuncionarioService, useClass:FuncionarioAbreviadoService }
    //{ provide: FuncionarioService, useFactory :criarFuncionarioService },
    //LogService,
    //{ provide: 'LogPrefixo', useValue: 'LOG'} //Configurando Injetor do Angular com Provider por valor
    //FuncionarioService,
    LogService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
