import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { WeatherService } from './../weather.service';

@Component({
  selector: 'app-nyc',
  templateUrl: './nyc.component.html',
  styleUrls: ['./nyc.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NycComponent implements OnInit {

  forcast: any;
  
  constructor(private _weatherService: WeatherService) {
    this.forcast = {}
  }

  ngOnInit() {
    this.getWeather(4930956);
  }
  getWeather(val){
    this._weatherService.getWeather(val,(data)=>{
      this.forcast = data
    })
  }
}
  