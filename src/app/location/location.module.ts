import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationRoutingModule } from './location-routing.module';
import { LocationComponent } from './location.component';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { LocationMasterComponent } from './location-master/location-master.component';
import { LocationEditComponent } from './location-edit/location-edit.component';
import { HomeModule } from '../home/home.module';




@NgModule({
  declarations: [
    LocationComponent,
    LocationMasterComponent,
    LocationEditComponent
   
  ],
  imports: [
    CommonModule,
    LocationRoutingModule,
    InputTextModule,
    FormsModule,

  ]
})
export class LocationModule { }
