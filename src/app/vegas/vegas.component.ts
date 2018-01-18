import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { WeatherService } from './../weather.service';

@Component({
  selector: 'app-vegas',
  templateUrl: './vegas.component.html',
  styleUrls: ['./vegas.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class VegasComponent implements OnInit {

  forcast: any;
  
  constructor(private _weatherService: WeatherService) {
    this.forcast = {}
  }

  ngOnInit() {
    this.getWeather(5506956);
  }
  getWeather(val){
    this._weatherService.getWeather(val,(data)=>{
      this.forcast = data
    })
  }
}
  