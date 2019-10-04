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
    this.consultar();
  }

  private consultar(){
      this.cidadeService.consultar()
      .then(cidades => {
        this.cidades = cidades;
    })
  }

  public adicionar(nome:string){
      this.cidadeService.adicionar({nome:nome})
      .then(cidade =>{
        //Esse alert é só por ter uma ideia
        //Dentro desse método apenas devido a sincronicidade
        //Se for fora do then vai executar de maneira assincrona
          alert(`Cidade "${cidade.nome}" adicionada com sucesso para o código ${cidade.id} !`);
          this.consultar();
      });
  }

  excluir(id:number){
      this.cidadeService.excluir(id)
        .then(()=>{
          alert('Cidade excluida com sucesso !');
          this.consultar();
        })
  }

  atualizar(cidade:any){
      //console.log(JSON.stringify(cidade));
      this.cidadeService.atualizar(cidade)
        .then(() =>{
          this.consultar();
      })
      .catch(erro =>{
        alert(erro);
      });
  }
}
