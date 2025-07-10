import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OnInit } from '@angular/core';
import { IRole } from '../../model/interface/role';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-roles',
  imports: [FormsModule],
  templateUrl: './roles.html',
  styleUrl: './roles.css'
})
export class Roles implements OnInit {

  roleList:IRole[]=[];

  http = inject(HttpClient);

  ngOnInit(): void {
    //alert("Init")
    this.getAllRoles();
    console.log(this.roleList);
  }

  getAllRoles(){
    // const headers = new HttpHeaders(
    //   {
    //     'Accept':'text/plain',
    //     'Content-type': 'text/plain'
    //   }
    // );
    
    this.http.get("/api/ClientStrive/GetAllRoles")
    .subscribe((res:any)=>{
      this.roleList = res.data;
    });
  }

  firstName: string = "Angular Tutorials";

  angularVersion = "Version 20";

  version: number = 20;

  isActive: boolean = false;

  currentDate: Date = new Date();

  text:string = "text";

  checkbox:string = "checkbox";

  radio:string="radio";

  state:string = "";

  showWelcomeAlert(){
    alert("Welcome to Angular tutorial...");
  }

  showMessage(message:string){
    alert(message);
  }
}
