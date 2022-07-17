import { Component, OnInit ,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { DisplayService } from 'src/app/services/display.service';

@Component({
  selector: 'app-location-edit',
  templateUrl: './location-edit.component.html',
  styleUrls: ['./location-edit.component.css'],
  // providers:[DynamicDialogRef, DynamicDialogConfig]
})
export class LocationEditComponent implements OnInit {
  @ViewChild('f') editForm!: NgForm;
  apiUrl = "http://localhost:3000/location";

  locations!:any[];
  dvalue!:any;
  id!:any;

  constructor(private crud: DisplayService, public ref: DynamicDialogRef, public config: DynamicDialogConfig) { 
    
  }

  ngOnInit(): void {
    this.id = this.config.data.id
    this.onGet();
    
    
   
  }

  onGet(){
    this.crud.get(this.apiUrl).subscribe((res) => {
      
    
      this.locations = res;
      // console.log(this.locations);
      

      this.dvalue = this.locations.findIndex((o: { id: any}) => o.id == this.id);
      
      
      this.editForm.setValue(this.locations[this.dvalue]);
    
      
      
    });
  }

  onSubmit(){
    this.crud.update(this.apiUrl,this.id, this.editForm.value).subscribe({
      next:() => {
        this.ref.close();
        
      }
    });
    
  }
}
