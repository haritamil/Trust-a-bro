import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // guard authorisation
  private loggedIn: boolean = false;
  private adminIn: boolean = false;
  // Admin || user check
  private isAdmin: boolean = false;
  private isUser: boolean = false;
  // navDetails
  username!: string;
  // nav showadmin
  private showAdmin: boolean = false;
  // subjects
  private adminSubject = new Subject<any>();
  private userSubject = new Subject<any>();
  private detailSubject = new Subject<any>();

  constructor() { }


// Admin
  AdminLogInOut(): void{
    this.adminIn = !this.adminIn
    this.showAdmin = !this.showAdmin;
    this.isAdmin = !this.isAdmin;
    this.adminSubject.next({show:this.showAdmin, loged:this.adminIn, admin:this.isAdmin});
  }

  onAdminLogInOut(): Observable<any>{
    return this.adminSubject.asObservable();
  }

// User
  UserLogInOut(): void{
    this.loggedIn = !this.loggedIn;
    this.isUser = !this.isUser;
    this.userSubject.next({loged: this.loggedIn, user:this.isUser});
  }

  onUserLogInOut(): Observable<any>{
    return this.userSubject.asObservable();
  }

// Authorization
  isUserAuthorised(){
    return this.loggedIn;
  }

  isAdminAuthorised(){
    return this.adminIn;
  }

// Navbar user/admin details
  navDetails(user_name:string){
      this.username = user_name;
      this.detailSubject.next(this.username);
  }

  getNavDetails(){
    return this.detailSubject.asObservable();
  }

}
