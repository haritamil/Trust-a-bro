import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DisplayService } from 'src/app/services/display.service';

@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.component.html',
  styleUrls: ['./change-pass.component.css']
})
export class ChangePassComponent implements OnInit {
  passForm!:FormGroup;
  constructor() { }

  ngOnInit(): void {
    
  }

  onSubmit(){
    console.log('true');
    
  }

}
