import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanActGuardGuard } from '../services/can-act-guard.guard';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { ChangePassComponent } from './change-pass/change-pass.component';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';


const routes: Routes = [{ path: '', component: HomeComponent },
{path: 'login', component: LoginComponent},
{path: 'admin', component: AdminComponent, canActivate:[CanActGuardGuard]},
{path: 'changepass', component: ChangePassComponent},
{path: 'nav', component: NavComponent},
{path: 'about', component:AboutComponent}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
