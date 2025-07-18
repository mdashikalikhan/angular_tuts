import { environment } from '../../../environments/environment';
import { APIResponseModel } from './../../model/interface/role';
import { ClientService } from './../../services/client-service';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClientObject } from '../../model/class/Client';
import { AsyncPipe, CommonModule, DatePipe, JsonPipe, UpperCasePipe } from '@angular/common';
import { Observable } from 'rxjs';
import { Constant } from '../../constant/Constant';
import { AlertComponent } from "../../reusableComponent/alert-component/alert-component";
import { MyButton } from "../../reusableComponent/my-button/my-button";


@Component({
  selector: 'app-client',
  imports: [FormsModule, CommonModule, UpperCasePipe, DatePipe, JsonPipe, AsyncPipe, AlertComponent, MyButton],
  templateUrl: './client.html',
  styleUrl: './client.css'
})
export class Client implements OnInit{

  constant = Constant;

  currentDate: Date = new Date();

  clientObject : ClientObject = new ClientObject();

  clientList: ClientObject[] = [];

  clientService = inject(ClientService);

  userList$: Observable<any> = new Observable<any>();


  ngOnInit(): void {
    this.loadClient();
    this.userList$ = this.clientService.getAllUser();
  }

  loadClient(){
    this.clientService.getAllClients().subscribe({
      next: (result:APIResponseModel)=>{
        this.clientList = result.data;
      },
      error: error=>{
        alert(environment.API_ERROR);
      }
    });
  }

  onSaveClient(data:string){
    this.clientService.updateClient(this.clientObject).subscribe({
      next: (result:APIResponseModel)=>{
        if(result.result){
          alert(environment.CLIENT_CREATED);
          this.loadClient();
          this.clientObject = new ClientObject();
        } else{
          alert(environment.CLIENT_NOT_CREATED);
        }
      },
      error: err=>{
        alert(environment.API_ERROR);
      }


    })
  }

  onEdit(obj:ClientObject){
    this.clientObject = obj;
  }

  onReset(){
    this.clientObject = new ClientObject();
  }

  onDelete(id: number){
    const isDelete = confirm("Are you sure want to delete?");

    if(!isDelete){
      return;
    }

    this.clientService.deleteClient(id).subscribe(
      {
        next: (result:string)=>{
          alert("Client delete success");
          this.loadClient();
        },
        error: err=>{
          console.error("Error: ", err)
          alert("Invalid Client...");
        }
      }
    );
  }

}
