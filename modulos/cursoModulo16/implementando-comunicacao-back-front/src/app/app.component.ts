import { Component, OnInit } from '@angular/core';
import { CidadeService } from './cidade.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'implementando-comunicacao-back-front';

  cidades = [];

  //Injetando o cidadeService no Construtor
  constructor(private cidadeService: CidadeService) {};

  ngOnInit(){
    this.cidadeService.consultar()
      .then(cidades => {
        this.cidades = cidades;
    })
        

  }

  adicionar(nome:string){
      console.log(nome);
  }

  excluir(id:number){
      console.log(id);
  }

  atualizar(cidade:any){
      console.log(JSON.stringify(cidade));
  }

}
