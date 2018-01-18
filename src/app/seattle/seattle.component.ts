import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { WeatherService } from './../weather.service';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SeattleComponent implements OnInit {

  forcast: any;

  constructor(private _weatherService: WeatherService) {
    this.forcast = {}
   }

  ngOnInit() {
    this.getWeather(5809844);
  }
  getWeather(val){
    this._weatherService.getWeather(val,(data)=>{
      this.forcast = data
    })
  }
}
