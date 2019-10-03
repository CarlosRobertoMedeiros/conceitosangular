import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CidadeService {

  apiUrl:string = "http://localhost:3000/cidades";

  constructor(private http: HttpClient) { }

  consultar(): Promise<any> {
    return this.http.get(this.apiUrl).toPromise();
  }
}
