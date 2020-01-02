import { Component, OnInit } from '@angular/core';
import { RestServiceService } from '../rest-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  empDetails;

  constructor(private service: RestServiceService, private route:Router) {

   }

  ngOnInit() {
    this.getEmployeeDetails();
  }
  getEmployeeDetails(){
    this.service.getList().subscribe((res) => {
    this.empDetails = res;
    });
  }
  navigateEmp(id){
    this.route.navigate(['/employee' ,id]);
  }
}
