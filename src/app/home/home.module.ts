import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
// Primeng
import { InputTextModule } from 'primeng/inputtext';
import {DialogModule} from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { LocationModule } from '../location/location.module';
import { AdminComponent } from './admin/admin.component';
import { ChangePassComponent } from './change-pass/change-pass.component';
import { FieldsetModule } from 'primeng/fieldset';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';






@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    AdminComponent,
    ChangePassComponent,
    NavComponent,
    AboutComponent,

  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    InputTextModule,
    ReactiveFormsModule,
    LocationModule,
    FieldsetModule,
    FormsModule,
    DialogModule,
    ButtonModule,
    DropdownModule
  ],
  exports: [
    NavComponent
  ]
})
export class HomeModule { }
