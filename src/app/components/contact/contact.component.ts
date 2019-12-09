import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public contact: any = {};
  public center = {
    lat: 40.6350739,
    lng: 22.9427695
  };
  constructor( private http: HttpClient) {


  }

  ngOnInit() {

    this.http.get( " https://simple-api.develobird.gr/contact").subscribe(response =>{
      this.contact = response;
      console.log(this.contact);
    })
  }

}
