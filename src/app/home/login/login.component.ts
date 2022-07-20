import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DisplayService } from 'src/app/services/display.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup;
  login!:any[];
  apiUrl = "http://localhost:3000/login";


  constructor(private crud:DisplayService, private router: Router, private auth: AuthService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{6,}')])
    })

  
      
      
  }

  

  onSubmit(){
    this.crud.get(this.apiUrl).subscribe((res) => {
       const admin = res.find((a: any) => {
           
           return (a.username === this.loginForm.value.username && a.password === this.loginForm.value.password && a.role === 'Admin');
           
      })

        const user = res.find((a: any) => {
        
          return (a.username === this.loginForm.value.username && a.password === this.loginForm.value.password);
        })


      
      

      if(admin){
        this.auth.AdminLogIn();
        this.auth.navDetails(this.loginForm.value.username);
        this.router.navigate(['/home/admin'])
      }else if(user){
        this.auth.UserLogIn();
        this.auth.navDetails(this.loginForm.value.username);
        this.router.navigate(['/location/location'])
      }else{
        alert("login with proper username and password")
      }     


      
      
    })

    
      
    
  }

}
