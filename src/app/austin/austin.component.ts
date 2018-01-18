import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { WeatherService } from './../weather.service';

@Component({
  selector: 'app-austin',
  templateUrl: './austin.component.html',
  styleUrls: ['./austin.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AustinComponent implements OnInit {
  forcast: any;
  
  constructor(private _weatherService: WeatherService) {
    this.forcast = {}
  }

  ngOnInit() {
    this.getWeather(4671654);
  }
  getWeather(val){
    this._weatherService.getWeather(val,(data)=>{
      this.forcast = data
    })
  }
}
  