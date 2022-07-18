import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VannRoutingModule } from './vann-routing.module';
import { VannComponent } from './vann.component';
import { AddComponent } from './add/add.component';
// Primeng
import { ButtonModule } from 'primeng/button';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { ToastModule } from 'primeng/toast';
import {InputTextModule} from 'primeng/inputtext';
import { UpdateComponent } from './update/update.component';
import { HomeModule } from '../home/home.module';


@NgModule({
  declarations: [
    VannComponent,
    AddComponent,
    UpdateComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    VannRoutingModule,
    InputTextModule,
    ButtonModule,
    DynamicDialogModule,
    ToastModule,
    HomeModule


    
  ]
})
export class VannModule { }
