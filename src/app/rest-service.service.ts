import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RestServiceService {

  constructor(private http: HttpClient) { }

  getList() {
      return this.http.get("http://localhost:8080/datarest/employees");
  }

  }


