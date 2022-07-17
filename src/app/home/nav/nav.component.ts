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
  showAdmin!: boolean;
  // User || Admin check
  isAdmin!: boolean;
  isUser!: boolean;

  // Admin || User details
  username!: string;

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
    
  }

  onClick(){
    if(this.isAdmin){
      this.auth.AdminLogInOut();
      this.router.navigate(['/home/about']);
    }else if(this.isUser){
      this.auth.UserLogInOut();
      this.router.navigate(['/home/about']);
    }
    
    
  }


}
