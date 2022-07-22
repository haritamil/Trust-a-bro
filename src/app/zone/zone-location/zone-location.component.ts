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

  header:string = "Link Zone and Locations"

  @ViewChild('f') zoneForm!: NgForm;
  cities: Zone[];
  locations: Location[] = [];
  selectedLocations: Location[] = [];
  selectedZone!: Zone;
  obj: object = {};

  // Getting data from ZoneLocation.json
  zoneLocations!:any[];
  display: boolean =false;
  editGet!:any;

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

      this.crud.get(this.locationUrl).subscribe((res) => {
        this.locations = res;
      })

     

   
   }

  ngOnInit(): void {
   this.getData();
  }


  getData(){
    this.crud.get(this.ZoneLocationUrl).subscribe((res) => {
      this.zoneLocations = res;
    
      
    })
  }
    
  showDialog() {
    this.display = true;
}

  onDelete(id:any){ 
    // () => (this.details = this.details.filter((d:any) => d.id !== id))
    this.crud.delete(`${this.ZoneLocationUrl}/${id}`).subscribe({
      next:() => {
        this.getData();
      }
    })
  }


  
  onSubmit(){
    // this.zoneForm.value.selectedZone = this.selectedZone.name;
    // this.zoneForm.value.selectedLocations = this.selectedLocations;
    // this.obj={
    //  [this.zoneForm.value.selectedZone] : this.selectedLocations
    // }

    // RESULT USING ABOVE METHOD
    // {
    //   "New York": [
    //     {
    //       "code": "RA",
    //       "id": 2,
    //       "location": "Ramanathapuram"
    //     }
    //   ],
    //   "id": 1
    // }


    this.obj={
      zone: this.selectedZone.name,
      locations: this.selectedLocations
     }

     this.crud.get(this.ZoneLocationUrl).subscribe({
      next:(res) => {
        const zone = res.find((a:any) => {
          return a.zone === this.selectedZone.name;
        })

        if(!zone){
          this.crud.add(this.ZoneLocationUrl, this.obj).subscribe({
            next:() => {
              this.getData();
              this.display = false;
              this.selectedLocations = [];
              this.selectedZone = {
                code:'',
                name:''
              }
            }
          });
        }else {
          alert('zone already exits');
        }
      }
     })
    
    
    
    
    
   
  }

}
