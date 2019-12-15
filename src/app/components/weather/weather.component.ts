import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  public lat;
  public lon;
  public res: any = {};


  constructor(private http: HttpClient) {
  }

  ngOnInit() {


    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        console.log(position);
        this.lat = position.coords.latitude;
        this.lon = position.coords.longitude;

      });
    } else {
      console.log('Geolocation is not supported for this Browser/OS.');
    }


      this.http.get("https://api.openweathermap.org/data/2.5/weather?q=london&units=metric&APPID=b0258d2d4f9f118481bc618dad21cc03").
      subscribe(response => {
        this.res = response;
        console.log(this.res);
      });




  }


}




