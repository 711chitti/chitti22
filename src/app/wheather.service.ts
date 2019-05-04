import { Injectable } from '@angular/core';
import { Currentwheather } from '././current.wheather';
import { Http,Response } from '@angular/http';
import 'rxjs/Rx';
import 'rxjs/add/operator/map'
@Injectable({
  providedIn: 'root'
})
export class WheatherService {
  Currentwheather = new Currentwheather ( 'New York', '80',  'assets/Sun.png', 'sunny', '07', '70')
  constructor(private http:Http) { }
  wheatherNow(){
    return this.Currentwheather;
  }
  localWheather(lat:string, lon:string){
     return this.http.get('https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon={lon}&appid=0807c0cd1d2981aaac6c1e58944a3295&units=imperial').map((response:Response)=>response.json());
  }

  anotherCityWheather(city:string){
    return  this.http.get('https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0807c0cd1d2981aaac6c1e58944a3295&units=imperial').map((response:Response)=>response.json());
  }
}
