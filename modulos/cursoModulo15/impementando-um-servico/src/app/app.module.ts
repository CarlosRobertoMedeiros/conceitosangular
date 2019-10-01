import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FuncionarioFormComponent } from './funcionario/funcionario-form/funcionario-form.component';
import { FuncionarioCardComponent } from './funcionario/funcionario-card/funcionario-card.component';
import { LogService } from './log.service';
import { FuncionarioService } from './funcionario/funcionario.service';

/*const criarFuncionarioService = () =>{
  return new FuncionarioAbreviadoService(4); //Instancio por fábrica com 4 Caracteres ao iniciar o nome
}*/

@NgModule({
  declarations: [
    AppComponent,
    FuncionarioCardComponent,
    FuncionarioFormComponent
    
  ],
  imports: [
    BrowserModule
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
