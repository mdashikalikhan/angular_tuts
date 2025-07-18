export interface IRole{
  roleId:number;
  role:string;
}

export interface IDesignation{
  designationId: number;
  designation:string;
}

export interface APIResponseModel{
  message:string;
  result:boolean;
  data:any;
}

export interface IEmployee{
  empName: string;
  empId: number;
  empCode: string;
  empEmailId: string;
  EmpDesignation: string;
  role:string;
}

export interface IClientProject {
  clientProjectId: number;
  projectName: string;
  startDate: Date;
  expectedEndDate: Date;
  leadByEmpId: string;
  completedDate: Date;
  contactPerson: string;
  contactPersonContactNo: string;
  totalEmpWorking: number;
  projectCost: number;
  projectDetails: string;
  contactPersonEmailId: string;
  clientId: number;
  companyName: string;
}

export interface ILoginObject{
  email:string;
  password:string;
}
