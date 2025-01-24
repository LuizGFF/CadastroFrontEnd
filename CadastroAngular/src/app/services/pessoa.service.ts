import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pessoa } from '../models/pessoas';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  private apiUrl = `${environment.ApiUrl}/Forms`

  constructor( private http: HttpClient ) { }

  GetPessoas() : Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(this.apiUrl); 
  }

}
