import { Component, OnInit } from '@angular/core';
import {WheatherService} from '../wheather.service';
import{Currentwheather} from '../current.wheather';
import 'rxjs/Rx';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    myWheather:Currentwheather;
    location
  constructor(private ws:WheatherService) { }

  ngOnInit() {
    this.myWheather = this.ws.wheatherNow();
    navigator.geolocation.getCurrentPosition((pos)=>{
      this.location=pos.coords;
      const lat =this.location.latitude;
      const lon =this.location.longitude;
      this.ws.localWheather(lat,lon).subscribe(
        (data) =>{
          console.log(data);
        }
        )
      
    })

  }
 
  onSubmit(weatherForm:NgForm){ 
    this.ws.anotherCityWheather(weatherForm.value.city).subscribe(
      (data) =>{
        console.log(data);
      }
      )

  }

}
