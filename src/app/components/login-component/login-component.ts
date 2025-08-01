import { CommonModule } from '@angular/common';
import { ILoginObject } from './../../model/interface/role';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-component',
  imports: [FormsModule, CommonModule],
  templateUrl: './login-component.html',
  styleUrl: './login-component.css'
})
export class LoginComponent implements OnInit{
  
  loginObj: ILoginObject={
    email: "",
    password: ""
  };

  router = inject(Router)

  ngOnInit(): void {
    const localUser = localStorage.getItem("userId");
    if(localUser){
      this.router.navigateByUrl("/client");
    }
  }

  onLogin(){
    if(this.loginObj.email=='khan.ashik@gmail.com' && this.loginObj.password=='123456'){
      this.router.navigateByUrl("/client");
      localStorage.setItem("userId", this.loginObj.email);
    } else{
      alert("Wrong Credentials.");
    }
  }
}


