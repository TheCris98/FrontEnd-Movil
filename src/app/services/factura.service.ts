import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  private api = 'api/FacturaControlador/cliente';

  constructor(private http: HttpClient) { }

  getCliente(idCli: any): Observable<any>{
    return this.http.post(environment.urlGlobal+this.api+"?idCliente="+idCli,idCli);
  }

}
