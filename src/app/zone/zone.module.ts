import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ZoneRoutingModule } from './zone-routing.module';
import { ZoneComponent } from './zone.component';
import { ZoneLocationComponent } from './zone-location/zone-location.component';
import { ZoneVanComponent } from './zone-van/zone-van.component';
import {DropdownModule} from 'primeng/dropdown';
import {MultiSelectModule} from 'primeng/multiselect';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ZoneComponent,
    ZoneLocationComponent,
    ZoneVanComponent
  ],
  imports: [
    CommonModule,
    ZoneRoutingModule,
    DropdownModule,
    MultiSelectModule,
    FormsModule
  ]
})
export class ZoneModule { }
