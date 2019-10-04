import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CidadeService {

  private apiUrl:string = "http://localhost:3000/cidades";

  constructor(private http: HttpClient) { }

  consultar(): Promise<any> {
    return this.http.get(this.apiUrl).toPromise();
  }

  adicionar(cidade:any): Promise<any> {
    return this.http.post(this.apiUrl,cidade).toPromise();
  }

  excluir(id: number): Promise<void> {
    // `` = Template Literals Apenas para não esquecer o nome
    let caminhoRemocaoId:string = "/"+id;
    let caminhoCompletoRemocaoId:string =this.apiUrl+caminhoRemocaoId; 

    return this.http.delete(caminhoCompletoRemocaoId)
      .toPromise()
      .then(()=>null);

  }

  atualizar(cidade:any): Promise<any> {
    let caminhoParcialAtualizacao:string = "/"+cidade.id;
    /*let caminhoCompletoDeAtualizacao:string =this.apiUrl.substring(0,this.apiUrl.length-1).trim()
                                             +caminhoParcialAtualizacao.trim(); */
    let caminhoCompletoDeAtualizacao:string =this.apiUrl+caminhoParcialAtualizacao;

    //Implementação dos Erros com o Retorno correto nos catchs
    return this.http.put(caminhoCompletoDeAtualizacao,cidade)
      .toPromise()
      .catch(erro =>{
        return Promise.reject(`Erro ao alterar cidade ${cidade.id}.`);
      });
  }



}
