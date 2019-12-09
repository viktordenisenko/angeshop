import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public message: any = {};
  constructor( private http:HttpClient) { }

  ngOnInit() {

    this.http.get(" https://simple-api.develobird.gr").subscribe(response =>{
      this.message= response;
      console.log(this.message);
    })
  }

}
