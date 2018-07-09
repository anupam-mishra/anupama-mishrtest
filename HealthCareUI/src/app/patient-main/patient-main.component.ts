import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-patient-main',
  templateUrl: './patient-main.component.html',
  styleUrls: ['./patient-main.component.css']
})
export class PatientMainComponent implements OnInit {

  constructor(private httpClient : HttpClient) { }

  ngOnInit() {
  }
 login()
 {
    this.httpClient.get(`http://localhost:3000/patient`).subscribe
    ((data:any[])=>{

       console.log(data);
    }
 );   
 }
}
