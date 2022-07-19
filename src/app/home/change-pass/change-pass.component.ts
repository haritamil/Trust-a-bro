import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DisplayService } from 'src/app/services/display.service';

@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.component.html',
  styleUrls: ['./change-pass.component.css']
})
export class ChangePassComponent implements OnInit {
  changePassForm!:FormGroup;
  id!:any;

  apiUrl = "http://localhost:3000/login/"
  constructor(private crud: DisplayService) { }

  ngOnInit(): void {
    this.changePassForm = new FormGroup({
      username: new FormControl('', Validators.required),
      // ePass: new FormControl('',[Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{6,}')]),
      password: new FormControl('', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{6,}')])
    })
  }

  onSubmit(){
    this.crud.get(this.apiUrl).subscribe({
      next:(res) => {
        
        const fake = res.find((u:any) => {
          this.id = u.id;
          return u.username == this.changePassForm.value.username;
        })
        
        if(fake){
          this.crud.update(this.apiUrl,this.id,this.changePassForm.value).subscribe({
            next:() => {
              console.log('update successful');
              this.changePassForm.reset();
              
            }
          });
        }else{
          alert('no such user')
        }
        
      }
    })
    
  }

}
