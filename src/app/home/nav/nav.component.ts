import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  showAdmin!: any;
  // User || Admin check
  isAdmin!: any;
  isUser!: any;

  // Admin || User details
  username!: any;

  // subscriptions
  adminSubscription!: Subscription;
  userSubscription!: Subscription;
  navSubscription!: Subscription;
  


  constructor(private auth: AuthService, private router: Router) { 
    
    this.adminSubscription = this.auth.onAdminLogInOut().subscribe((data) => {
      this.showAdmin = data.show;
      this.isAdmin = data.admin;
    })
    this.userSubscription = this.auth.onUserLogInOut().subscribe((data) => {
      this.isUser = data.user;
      
    })

    this.navSubscription = this.auth.getNavDetails().subscribe((data) => {
      this.username = data;
    })

    
    


  }
  ngOnInit(): void {

    this.showAdmin = localStorage.getItem('showAdmin');
    this.isAdmin = localStorage.getItem('isAdmin');
    this.username = localStorage.getItem('name');
    this.isUser = localStorage.getItem('isUser');
  }
  

  onClick(){
    if(this.isAdmin){
      this.auth.AdminLogOut();
      this.router.navigate(['/home/login']);
    }else if(this.isUser){
      this.auth.UserLogOut();
      this.router.navigate(['/home/login']);
    }
    
    
  }


}
