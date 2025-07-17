import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-client-project',
  imports: [FormsModule, CommonModule],
  templateUrl: './client-project.html',
  styleUrl: './client-project.css'
})
export class ClientProject {
  projectForm:FormGroup = new FormGroup({
    clientProjectId:new FormControl(0),
    projectName: new FormControl(""),
    startDate: new FormControl(""),
    expectedEndDate: new FormControl(""),
    leadByEmpId: new FormControl(""),
    completedDate: new FormControl(""),
    contractPerson: new FormControl(""),
    contactPersonContactNo: new FormControl(""),
    totalEmpWorking: new FormControl(""),
    projectCost: new FormControl(""),
    projectDetails: new FormControl(""),
    contactPersonEmailId: new FormControl(""),
    clientId: new FormControl("")
  });
}
