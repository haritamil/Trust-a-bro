import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DisplayService } from 'src/app/services/display.service';
import { PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  empForm!:FormGroup;
  userDetails:any = [];
  apiUrl = "http://localhost:3000/login";
  constructor(private crud: DisplayService,private primengConfig: PrimeNGConfig) { 

  }

  ngOnInit(): void {
    this.empForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{6,}')])
    })

    this.getData();
   

    this.primengConfig.ripple = true;

  }

  getData(){
    this.crud.get(this.apiUrl).subscribe((res:any) => {
      this.userDetails = res;
      
      
    })
  }

  onDelete(id:number){
    
    const dUrl = `${this.apiUrl}/${id}`
    this.crud.delete(dUrl).subscribe(() => (this.userDetails = this.userDetails.filter((d:any) => d.id !== id)));
    
    
   }





  onSubmit(){
    this.crud.get(this.apiUrl).subscribe({
      next:(res) =>{
        const available = res.find((a:any) => {
         return a.username === this.empForm.value.username;
          
        });

        if(!available){
          this.crud.add(this.apiUrl, this.empForm.value).subscribe({
            next:()=>{
              console.log('added successfully');
              this.getData();
              this.empForm.reset();
            }
            
          })
        }else {
          alert("username and password already exists");
          this.empForm.reset();
        }
         
        
        
      }
    })
    
  }



}
