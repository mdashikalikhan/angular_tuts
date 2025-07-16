import { environment } from '../../../environments/environment';
import { APIResponseModel } from './../../model/interface/role';
import { ClientService } from './../../services/client-service';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClientObject } from '../../model/class/Client';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-client',
  imports: [FormsModule, CommonModule],
  templateUrl: './client.html',
  styleUrl: './client.css'
})
export class Client implements OnInit{

  clientObject : ClientObject = new ClientObject();

  clientList: ClientObject[] = [];

  clientService = inject(ClientService);

  ngOnInit(): void {
    this.loadClient();
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

  onSaveClient(){
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
