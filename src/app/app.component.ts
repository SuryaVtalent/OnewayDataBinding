import { Component } from '@angular/core';
import { IDepartment } from './Models/IDepartment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'OnewayDataBinding';

  name:string;
  Salary:number;
  Flag:boolean;
  Numbers:number[];
  Players:string[];
  Dept:IDepartment[];



  constructor(){
    this.name="Surya";
    this.Salary=1000;
    this.Flag=true;
    this.Numbers=[1,2,3,4,5,6,7,8,9];
    this.Players=["Virat","Kohli","Surya","Greeshma","Ivaan"];
    this.Dept=[
      {deptno:10,dname:"Manager",location:"Hyderabad"},
      {deptno:20,dname:"HR",location:"Chennai"},
      {deptno:30,dname:"Sales",location:"Delhi"},
      this.Dept1,
      this.Dept2
    ]
  }

  //objectName:InterfaceName=

  Dept1:IDepartment={deptno:40,dname:"Operations",location:"Mumbai"}
  Dept2:IDepartment={deptno:50,dname:"TL",location:"Chennai"}
  

}
