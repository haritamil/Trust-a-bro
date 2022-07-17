import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DisplayService } from 'src/app/services/display.service';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';



@Component({
  selector: 'app-location-master',
  templateUrl: './location-master.component.html',
  styleUrls: ['./location-master.component.css'],
  // providers:[DynamicDialogRef, DynamicDialogConfig]
})
export class LocationMasterComponent implements OnInit {
  @ViewChild('f') signupForm!: NgForm;

  constructor(private crud: DisplayService, public ref: DynamicDialogRef, public config: DynamicDialogConfig) { }
  apiUrl = "http://localhost:3000/location";
  ngOnInit(): void {
    
  }

  onSubmit(){
    this.crud.add(this.apiUrl, this.signupForm.value).subscribe({
      next:() => {
        this.signupForm.reset();
        this.ref.close();
        
      }
    });
    
  }
  

}
