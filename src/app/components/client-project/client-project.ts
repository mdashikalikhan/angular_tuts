import { APIResponseModel, IClientProject } from './../../model/interface/role';
import { CommonModule, DatePipe } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClientService } from '../../services/client-service';
import { IEmployee } from '../../model/interface/role';
import { environment } from '../../../environments/environment';
import { ClientObject } from '../../model/class/Client';
import { AlertComponent } from "../../reusableComponent/alert-component/alert-component";

@Component({
  selector: 'app-client-project',
  imports: [FormsModule, CommonModule, ReactiveFormsModule, DatePipe, AlertComponent],
  templateUrl: './client-project.html',
  styleUrl: './client-project.css'
})
export class ClientProject implements OnInit{

  projectForm:FormGroup = new FormGroup({
    clientProjectId:new FormControl(0),
    projectName: new FormControl("", [Validators.required, Validators.minLength(4)]),
    startDate: new FormControl(""),
    expectedEndDate: new FormControl(""),
    leadByEmpId: new FormControl(""),
    completedDate: new FormControl(""),
    contactPerson: new FormControl(""),
    contactPersonContactNo: new FormControl(""),
    totalEmpWorking: new FormControl(""),
    projectCost: new FormControl(""),
    projectDetails: new FormControl(""),
    contactPersonEmailId: new FormControl(""),
    clientId: new FormControl("")
  });

  clientService = inject(ClientService);

  employeeList: IEmployee[] = [];

  clientList: ClientObject[]=[];

  firstName = signal("");

  cProjects = signal<IClientProject[]>([]);


  ngOnInit(): void {
      const name = this.firstName;
      this.getAllEmployees();
      this.getAllClients();
      this.getAllProjects();
  }

  changFName(){
    this.firstName.set("Pilot List");
  }

  getAllProjects(){
    this.clientService.getClientProjects().subscribe(
      {
        next: (result:APIResponseModel)=>{
          this.cProjects.set(result.data);
        },
        error: err=>{
          alert(environment.API_ERROR);
        }
      }
    );
  }

  getAllEmployees(){
    this.clientService.getAllEmployees().subscribe(
      {
        next: (result:APIResponseModel)=>{
          this.employeeList = result.data;
        },
        error: err=>{
          alert(environment.API_ERROR);
        }
      }
    );
  }

  getAllClients(){
    this.clientService.getAllClients().subscribe({
      next: (result:APIResponseModel)=>{
        this.clientList=result.data;
      },
      error: err=>{
        alert(environment.API_ERROR);
      }
    })
  }

  onSaveProject(){
    const formValue = this.projectForm.value;
    debugger;
    this.clientService.updateEmployee(formValue).subscribe({
      next: (result:APIResponseModel)=>{
        if(result.result){
          alert("Project Created Successfully..")
        } else{
          alert(result.message);
        }
      },
      error: err=>{
          alert(environment.API_ERROR);
      }
    });
  }
}
