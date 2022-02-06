import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cliente } from '../interfaces/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private api = 'api/ClienteControlador/';


  constructor(private http: HttpClient) { }

  saveCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(environment.urlGlobal + this.api,cliente);
  }
}
