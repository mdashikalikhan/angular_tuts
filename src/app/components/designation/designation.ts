
import { Component, inject, OnInit } from '@angular/core';
import { Master } from '../../services/master';
import { APIResponseModel, IDesignation } from '../../model/interface/role';


@Component({
  selector: 'app-designation',
  imports: [],
  templateUrl: './designation.html',
  styleUrl: './designation.css'
})
export class Designation implements OnInit {

  designationList: IDesignation[] = [];

  isLoader:boolean = true;

  masterService = inject(Master);

  ngOnInit(): void {
    this.masterService.getDesignations().subscribe(
      {
        next:(result: APIResponseModel)=>{
          this.designationList = result.data;
          this.isLoader=false;

        },
        error: err=>{
          alert("API Error/Network down..");
          this.isLoader=false;
        }
      }
    );
  }



}
