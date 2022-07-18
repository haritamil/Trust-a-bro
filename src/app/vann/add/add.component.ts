import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { DisplayService } from 'src/app/services/display.service';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';




  @Component({
    selector: 'app-add',
    templateUrl: './add.component.html',
    styleUrls: ['./add.component.css'],
    providers:[DynamicDialogRef, DynamicDialogConfig]
 
  })
  export class AddComponent implements OnInit {
    
    signupForm!:FormGroup;
    action: string = "Save";
    apiUrl = "http://localhost:3000/van";

 
    constructor(private crud: DisplayService, public ref: DynamicDialogRef, public config: DynamicDialogConfig) { }

    ngOnInit(): void {
      this.signupForm = new FormGroup({
        code: new FormControl("", [Validators.required, Validators.pattern('[A-Z]{3,}[0-9]{3,}')] ),
        carName: new FormControl("", [Validators.required, Validators.pattern('^[^0-9]+$')]),
        brand: new FormControl("", [Validators.required, Validators.pattern('^[^0-9]+$')]),
        model: new FormControl("", [Validators.required, Validators.pattern('^[^A-Za-z]+$')]),
        year: new FormControl("", [Validators.required, Validators.pattern('^[^A-Za-z]+$'), Validators.minLength(4),Validators.maxLength(4)]),
        color: new FormControl("", [Validators.required, Validators.pattern('^[^0-9]+$')]),
        regno: new FormControl("", [Validators.required, Validators.pattern('^[^A-Za-z]+$'), Validators.minLength(8)])
      });

    }

    onSubmit(){
      this.crud.add(this.apiUrl,this.signupForm.value).subscribe({
        next:(res)=>{
          this.ref.close();
        },
        error:()=>{
          alert("error...")
        }
        
      });
     
    }

    

  }
