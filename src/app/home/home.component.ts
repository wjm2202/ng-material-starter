import { Component, OnInit } from '@angular/core';

interface sensorDetail{
  id:number,
  name:string,
  description:string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  selectedSensor:sensorDetail;
  sensor:sensorDetail = {id: 1, name: "Sensor 1", description: "attached to fork truck"};
  sensors:sensorDetail[] = [ 
  {id: 1, name: "Sensor 1", description: "attached to fork truck"},
  {id: 2, name: "Sensor 2", description: "attached to the lamp"},
  {id: 3, name: "Sensor 3", description: "attached to crane"},
  {id: 4, name: "Sensor 4", description: "attached to cable drum"} ];

  constructor() { }

  ngOnInit() {
  }

  selectSensor(ev: any){
    console.log("selected");
    let id = ev.source.selected.viewValue;
    this.sensors.forEach((sensor)=>{
      if(id == sensor.id){
        this.sensor = sensor;
      }
    });
  }

}
