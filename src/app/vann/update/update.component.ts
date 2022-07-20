import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { DisplayService } from 'src/app/services/display.service';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
  // providers: [DynamicDialogConfig, DynamicDialogRef]
  
})
export class UpdateComponent implements OnInit {
  editForm!:FormGroup;
  id!:any;
  details!:any[];
  dvalue!:any;

  apiUrl = "http://localhost:3000/van/";
  constructor(private crud: DisplayService,  public ref: DynamicDialogRef, public config: DynamicDialogConfig) { }

  ngOnInit(): void {
    this.editForm = new FormGroup({
      code: new FormControl("", [Validators.required, Validators.pattern('[A-Z]{1,}[0-9]{1,}')] ),
      carName: new FormControl("", [Validators.required, Validators.pattern('^[^0-9]+$')]),
      brand: new FormControl("", [Validators.required, Validators.pattern('^[^0-9]+$')]),
      model: new FormControl("", [Validators.required, Validators.pattern('^[^A-Za-z]+$')]),
      year: new FormControl("", [Validators.required, Validators.pattern('^[^A-Za-z]+$'), Validators.minLength(4), Validators.min(2000), Validators.max(2050)]),
      color: new FormControl("", [Validators.required, Validators.pattern('^[^0-9]+$')]),
      regno: new FormControl("", [Validators.required, Validators.pattern('^[^A-Za-z]+$'), Validators.minLength(3)])
    });
    
    this.id = this.config.data.id;

    this.crud.get(this.apiUrl).subscribe((res) => {
      this.details = res;

      this.dvalue = this.details.findIndex((o: { id: any; }) => o.id == this.id);
      this.editForm.controls['code'].setValue(this.details[this.dvalue].code);
      this.editForm.controls['carName'].setValue(this.details[this.dvalue].carName);
      this.editForm.controls['brand'].setValue(this.details[this.dvalue].brand);
      this.editForm.controls['model'].setValue(this.details[this.dvalue].model);
      this.editForm.controls['year'].setValue(this.details[this.dvalue].year);
      this.editForm.controls['color'].setValue(this.details[this.dvalue].color);
      this.editForm.controls['regno'].setValue(this.details[this.dvalue].regno);
      
    });
  }

 

  onSubmit(){
    this.crud.get(this.apiUrl).subscribe({
      next:(res)=>{
        const available = res.find((a:any) => {
          return a.regno === this.editForm.value.regno && a.carName === this.editForm.value.carName;
           
         });

         if(!available){
          this.crud.update(this.apiUrl,this.id,this.editForm.value)
          .subscribe({
            next:(_res)=>{
              this.editForm.reset();
              this.ref.close();
              
            },
            error:()=>{
              alert("error in update...")
            }
          }) 
        }else {
          alert("code already exits")
         }
      },
      error:()=>{
        alert("error...")
      }
      
    });
   
    
    
    // 
 
  }

  

}
