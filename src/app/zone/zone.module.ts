import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ZoneRoutingModule } from './zone-routing.module';
import { ZoneComponent } from './zone.component';
import { ZoneLocationComponent } from './zone-location/zone-location.component';
import { ZoneVanComponent } from './zone-van/zone-van.component';


@NgModule({
  declarations: [
    ZoneComponent,
    ZoneLocationComponent,
    ZoneVanComponent
  ],
  imports: [
    CommonModule,
    ZoneRoutingModule
  ]
})
export class ZoneModule { }
