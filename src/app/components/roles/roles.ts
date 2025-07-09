import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-roles',
  imports: [FormsModule],
  templateUrl: './roles.html',
  styleUrl: './roles.css'
})
export class Roles {
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
