import { Subject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { LoaderService } from './services/loader.service';
import { CommonService } from './services/common.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'endosoft_task';

   constructor(
     public loader:LoaderService,
     public api:CommonService,
     private http: HttpClient
   ){

   }
  ngOnInit(): void {
    this.http.get('http://localhost:3000/posts').subscribe(res => {
      console.log('res', res)
    })
  }

 
  
   
}
