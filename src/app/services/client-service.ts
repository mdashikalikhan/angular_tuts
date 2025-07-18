import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientObject } from '../model/class/Client';
import { environment } from '../../environments/environment';
import { APIResponseModel, IClientProject } from '../model/interface/role';
import { Constant } from '../constant/Constant';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http:HttpClient) { }

  getAllClients():Observable<APIResponseModel>{
    return this.http.get<APIResponseModel>(environment.API_URL+Constant.API_METHOD.CLIENTS);
  }

  updateClient(obj:ClientObject):Observable<APIResponseModel>{
    return this.http.post<APIResponseModel>(environment.API_URL+"clients", obj)
  }

  deleteClient(id:number):Observable<string>{
    return this.http.delete(environment.API_URL+"clients/"+id, {
      responseType:'text' as const
    });
  }

  getAllEmployees():Observable<APIResponseModel>{
    return this.http.get<APIResponseModel>(environment.API_URL+Constant.API_METHOD.EMPLOYEES);
  }

  getClientProjects():Observable<APIResponseModel>{
    return this.http.get<APIResponseModel>(environment.API_URL+Constant.API_METHOD.CLIENT_PROJECT);
  }

  updateEmployee(obj:IClientProject):Observable<APIResponseModel>{
    return this.http.post<APIResponseModel>(environment.API_URL+"employees", obj)
  }

  getAllUser(){
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }
}
