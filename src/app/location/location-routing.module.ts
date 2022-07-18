import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationEditComponent } from './location-edit/location-edit.component';
import { LocationMasterComponent } from './location-master/location-master.component';
import { LocationComponent } from './location.component';

const routes: Routes = [
  { path: 'location', component: LocationComponent },
  { path: 'location-master', component: LocationMasterComponent},
  { path: 'location-edit', component: LocationEditComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationRoutingModule { }
