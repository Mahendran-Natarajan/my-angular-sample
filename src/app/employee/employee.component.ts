import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private router:ActivatedRoute) { }

  ngOnInit() {

    this.router.params.subscribe(
      (res) => {
        alert(res.empid);
      }
    );

  }

}
