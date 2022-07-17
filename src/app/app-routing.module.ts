import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanActGuardGuard } from './services/can-act-guard.guard';

const routes: Routes = [
{ path: 'location', loadChildren: () => import('./location/location.module').then(m => m.LocationModule), canActivate:[CanActGuardGuard] }, 
// {path: '', redirectTo: '/home', pathMatch: 'full'},
{ path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
{ path: 'vann', loadChildren: () => import('./vann/vann.module').then(m => m.VannModule), canActivate:[CanActGuardGuard] },
{ path: 'zone', loadChildren: () => import('./zone/zone.module').then(m => m.ZoneModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
