import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DisplayService {

  constructor(private http:HttpClient) { 
    
  }
  get(url:any){
    return this.http.get<any>(url);
  }

  add(url:any, data:any){
    return this.http.post<any>(url, data);
  }

  update(url:any, id:any, data:any){
    return this.http.put<any>(url+id, data);
  }

  delete(url:any){
    return this.http.delete<any>(url);
  }
  
}
