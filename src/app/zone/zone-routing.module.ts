import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ZoneLocationComponent } from './zone-location/zone-location.component';
import { ZoneVanComponent } from './zone-van/zone-van.component';
import { ZoneComponent } from './zone.component';

const routes: Routes = [{ path: 'zone', component: ZoneComponent },
{path: 'zone-location', component: ZoneLocationComponent},
{path: 'zone-van', component: ZoneVanComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ZoneRoutingModule { }
