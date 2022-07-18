import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DisplayService } from 'src/app/services/display.service';

interface Zone{
  code: string,
  name: string
  
}

interface Location {
  code: string,
  location: string
}


@Component({
  selector: 'app-zone-location',
  templateUrl: './zone-location.component.html',
  styleUrls: ['./zone-location.component.css']
})
export class ZoneLocationComponent implements OnInit {

  @ViewChild('f') zoneForm!: NgForm;
  cities: Zone[];
  locations: Location[] = [];
  selectedLocations: Location[] = [];
  selectedZone!: Zone;
  obj: object = {};

  locationUrl:string = 'http://localhost:3000/location';
  ZoneLocationUrl: string = 'http://localhost:3000/ZoneLocation';


  constructor(private crud: DisplayService) {
    this.cities = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
  ];

//   this.locations = [
//     {location: 'New York', code: 'NY'},
//     {location: 'Rome', code: 'RM'},
//     {location: 'London', code: 'LDN'},
//     {location: 'Istanbul', code: 'IST'},
//     {location: 'Paris', code: 'PRS'}
// ];
      this.crud.get(this.locationUrl).subscribe((res) => {
        this.locations = res;
      })

   
   }

  ngOnInit(): void {
  }

  onSubmit(){
    this.zoneForm.value.selectedZone = this.selectedZone.name;
    this.zoneForm.value.selectedLocations = this.selectedLocations;
   
    
    this.obj={
     [this.zoneForm.value.selectedZone] : this.selectedLocations
    }

    this.crud.add(this.ZoneLocationUrl, this.obj).subscribe({
      next:() => {
        this.crud.get(this.ZoneLocationUrl).subscribe((res) => {
          console.log("get ");
          console.log(res);
          
          
        })
      }
    });
    
    
    
    
   
  }

}
