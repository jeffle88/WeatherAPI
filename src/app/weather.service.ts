import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class WeatherService {

  constructor(private _http: Http) { }

  getWeather(val, cb){
    this._http.get("https://api.openweathermap.org/data/2.5/weather?id=" + val + "&appid=c5c67e111de64fd28aca7969d210d6ad").subscribe((res)=>{
      cb(res.json())
    })
  }
}
