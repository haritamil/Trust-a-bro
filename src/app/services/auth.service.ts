import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // guard authorisation
  private loggedIn!:any;
  private adminIn!:any;
  // Admin || user check
  private isAdmin!:any;
  private isUser!:any;
  // navDetails
  username!: any;
  // nav showadmin
  private showAdmin!:any;
  // subjects
  private adminSubject = new Subject<any>();
  private userSubject = new Subject<any>();
  private detailSubject = new Subject<any>();

  constructor() { }


// Admin
  AdminLogIn(): void{
    localStorage.setItem('adminIn', 'true');
    localStorage.setItem("showAdmin", "true");
    localStorage.setItem("isAdmin", 'true');
    this.adminIn = localStorage.getItem('adminIn');
    this.showAdmin = localStorage.getItem('showAdmin');
    this.isAdmin = localStorage.getItem('isAdmin');
   
    this.adminSubject.next({show:this.showAdmin, loged:this.adminIn, admin:this.isAdmin});
  }

  AdminLogOut(): void {
    localStorage.removeItem('adminIn');
    localStorage.removeItem("showAdmin");
    localStorage.removeItem("isAdmin");
    localStorage.removeItem('name');
    this.adminIn = false;
    this.showAdmin = false;
    this.isAdmin = false;
    this.adminSubject.next({show:this.showAdmin, loged:this.adminIn, admin:this.isAdmin});
  }

  onAdminLogInOut(): Observable<any>{
    return this.adminSubject.asObservable();
  }

// User
  UserLogIn(): void{
    localStorage.setItem('userIn', 'true');
    localStorage.setItem("isUser", 'true');
    this.loggedIn =  localStorage.getItem('UserIn');
    this.isUser =  localStorage.getItem('isUser');
    this.userSubject.next({loged: this.loggedIn, user:this.isUser});
  }

  UserLogOut(): void {
    localStorage.removeItem('UserIn');
    localStorage.removeItem("isUser");
    localStorage.removeItem('name');
    this.loggedIn = false;
    this.isUser = false;
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
      localStorage.setItem('name', user_name);
      this.username = localStorage.getItem('name');
      this.detailSubject.next(this.username);
  }

  getNavDetails(){
    return this.detailSubject.asObservable();
  }

}
