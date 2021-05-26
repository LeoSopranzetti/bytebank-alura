import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transferencia } from '../models/transferencia.models';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private ListaTransferencia!: any[];
  private url = 'http://localhost:3000/transferencias';

constructor(private httpClient : HttpClient) {
  this.ListaTransferencia! =[];
 }

 get transferencias(){
   return this.ListaTransferencia;
 }

 todas(){
   return this.httpClient.get<Transferencia[]>(this.url);
 }

 adicionar(transferencia: Transferencia): Observable<Transferencia>{
  this.hidratar(transferencia);

  return this.httpClient.post<Transferencia>(this.url, transferencia)
 }

 hidratar(transferencia: any){
    transferencia.data = new Date();
 }

}
