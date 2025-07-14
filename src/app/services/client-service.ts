import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientObject } from '../model/class/Client';
import { environment } from '../../environments/environment';
import { APIResponseModel } from '../model/interface/role';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http:HttpClient) { }

  getAllClients():Observable<APIResponseModel>{
    return this.http.get<APIResponseModel>(environment.API_URL+"clients");
  }

  updateClient(obj:ClientObject):Observable<APIResponseModel>{
    return this.http.post<APIResponseModel>(environment.API_URL+"clients", obj)
  }

  deleteClient(id:number):Observable<APIResponseModel>{
    return this.http.delete<APIResponseModel>(environment.API_URL+"clients/"+id);
  }
}
